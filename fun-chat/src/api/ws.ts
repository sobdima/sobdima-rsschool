import { createSpan } from '../components/span';
import {
  WSRequest,
  WSResponse,
  ExternalUserPayload,
  UserAuthStatus,
  UserListPayload,
} from '../utils/types';

let websocket: WebSocket | null = null;

const listeners: { [id: string]: (response: WSResponse) => void } = {};
const externalUsers = new Map<string, boolean>([]);

// Create WebSocket-connection
export function connect(url: string) {
  websocket = new WebSocket(url);

  websocket.onopen = () => {
    console.log('Dima has opened [WebSocket]');
  };

  websocket.onmessage = (event) => {
    const message: WSResponse = JSON.parse(event.data);
    console.log('Dima has a message from [WebSocket]:', message);

    if (message.type === "USER_EXTERNAL_LOGIN") {

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
    console.log("sendRequest", request);

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
  try {
    // Get both active and inactive users
    const [activeUsers, inactiveUsers] = await Promise.all([
      getUsersByStatus('authorized'),
      getUsersByStatus('unauthorized')
    ]);

    console.log("A_A_A", activeUsers);

    const usersList = document.querySelector(".users-list");
    if (!usersList) return;

    usersList.innerHTML = '';

    // Add active users
    if (activeUsers.payload?.users) {
      activeUsers.payload.users.forEach(user => {
        const userSpan = createSpan('user-name online', user.login);
        usersList.appendChild(userSpan);
      })
    }

    // Add active users
    if (inactiveUsers.payload?.users) {
      inactiveUsers.payload.users.forEach(user => {
        const userSpan = createSpan('user-name offline', user.login);
        usersList.appendChild(userSpan);
      })
    }
  } catch (error) {
    console.error('Dimka Failed to update users list:', error);
  }
}