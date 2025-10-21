import { createSpan } from '../components/span';
import { handleRouting } from '../router/router';
import {
  WSRequest,
  WSResponse,
  ExternalUserPayload,
  UserAuthStatus,
  UserListPayload,
} from '../utils/types';
import { loginUser } from './auth';

let websocket: WebSocket | null = null;

const listeners: { [id: string]: (response: WSResponse) => void } = {};

// Create WebSocket-connection
export function connect(url: string) {
  websocket = new WebSocket(url);

  websocket.onopen = async () => {
    await updateExternalUsersList();
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      try {
        const response = await loginUser(username, password);
        if (response.type !== 'USER_LOGIN') {
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

  websocket.onmessage = (event) => {
    const message: WSResponse = JSON.parse(event.data);
    console.log('Dima has a message from [WebSocket]:', message);

    if (message.type === "USER_EXTERNAL_LOGIN" || message.type === "USER_EXTERNAL_LOGOUT") {
      updateExternalUsersList();
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


// Универсальная функция отправки строго типизированного запроса Login & Logout
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

export async function getUsersByStatus(status: UserAuthStatus): Promise<WSResponse<UserListPayload>> {
  const requestType = status === 'authorized' ? 'USER_ACTIVE' : 'USER_INACTIVE';
  return sendRequest(requestType, null);
}

export async function updateExternalUsersList() {
  const username = localStorage.getItem('username')?.trim();
  try {
    // Get both active and inactive users
    const [activeUsers, inactiveUsers] = await Promise.all([
      getUsersByStatus('authorized'),
      getUsersByStatus('unauthorized')
    ]);

    const usersList = document.querySelector(".users-list");
    if (!usersList) return;

    usersList.innerHTML = '';

    // Add active users
    if (activeUsers.payload?.users) {
      activeUsers.payload.users.map(user => {
        if (user.login !== username) {
          const userSpan = createSpan('user-name online', user.login);
          userSpan.style.color = "green";
          usersList.appendChild(userSpan);
        }
      })
    }

    // Add active users
    if (inactiveUsers.payload?.users) {
      inactiveUsers.payload.users.map(user => {
        if (user.login !== username) {
          const userSpan = createSpan('user-name offline', user.login);
          userSpan.style.color = "red";
          usersList.appendChild(userSpan);
        }

      })
    }
  } catch (error) {
    console.error('Dimka Failed to update users list:', error);
  }
}