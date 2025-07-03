import {
  WSRequest,
  WSResponse,
  WSRequestType,
  WSResponseType,
} from '../utils/types';

let socket: WebSocket | null = null;

const listeners: { [id: string]: (response: WSResponse) => void } = {};

// Создаём WebSocket-подключение
export function connect(url: string) {
  socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('[WebSocket] Connected');
  };

  socket.onmessage = (event) => {
    const message: WSResponse = JSON.parse(event.data);
    console.log('[WebSocket] Message received:', message);

    if (message.id && listeners[message.id]) {
      listeners[message.id](message);
      delete listeners[message.id]; // удаляем после ответа
    }
  };

  socket.onclose = () => {
    console.warn('[WebSocket] Connection closed');
  };

  socket.onerror = (err) => {
    console.error('[WebSocket] Error:', err);
  };
}

// Уникальный id для запроса
function generateId() {
  return Math.random().toString(36).substring(2, 10);
}

// Универсальная функция отправки строго типизированного запроса
export function sendRequest<
  ReqPayload,
  ResPayload = unknown
>(type: WSRequestType, payload: ReqPayload): Promise<WSResponse<ResPayload>> {
  return new Promise((resolve, reject) => {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
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
    socket.send(JSON.stringify(request));
  });
}
