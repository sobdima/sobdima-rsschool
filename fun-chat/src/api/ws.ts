import { handleRouting } from '../router/router';
import { updateExternalUsersList } from '../services/usersService';
import { WSRequest, WSResponse } from '../utils/types';
import { loginUser } from './auth';

let websocket: WebSocket | null = null;
const listeners: { [id: string]: (response: WSResponse) => void } = {};

// Create WebSocket-connection
export function connect(url: string) {
  websocket = new WebSocket(url);

  websocket.onopen = async () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      try {
        const response = await loginUser(username, password);
        if (response.type === 'USER_LOGIN') {
          window.location.hash = '#chat';
          handleRouting();
        } else {
          localStorage.clear();
          window.location.hash = '#login';
          handleRouting();
        }
      } catch (error) {
        console.error('Failed to restore authentication:', error);
        localStorage.clear();
        window.location.hash = '#login';
        handleRouting();
      }
    }
  };

  websocket.onmessage = async (event) => {
    const message: WSResponse = JSON.parse(event.data);

    if (message.type === "USER_LOGIN") {
      setTimeout(() => {
        updateExternalUsersList();
      }, 300)
    }

    if (message.type === "USER_EXTERNAL_LOGIN" || message.type === "USER_EXTERNAL_LOGOUT") {
      await updateExternalUsersList();
    }

    if (message.id && listeners[message.id]) {
      listeners[message.id](message);
      delete listeners[message.id];
    }
  };

  websocket.onclose = () => {
    console.warn('Dima closed [WebSocket]');
  };

  websocket.onerror = (err) => {
    console.error('Dima has [WebSocket] Error:', err);
  };
}

// Generate request identifier (id)
export function generateId() {
  return Math.random().toString(36).substring(2, 10);
}

// Universal sendRequest function
export function sendRequest<
  ReqPayload,
  ResPayload = unknown
>(type: string, payload: ReqPayload): Promise<WSResponse<ResPayload>> {
  return new Promise((resolve, reject) => {
    if (!websocket || websocket.readyState !== WebSocket.OPEN) {
      return reject(new Error('WebSocket is not connected'));
    }

    const id = generateId();

    const request: WSRequest<ReqPayload> = {
      id,
      type,
      payload,
    };

    listeners[id] = (message) => {
      resolve(message as WSResponse<ResPayload>);
    };
    websocket.send(JSON.stringify(request));
  });
}
