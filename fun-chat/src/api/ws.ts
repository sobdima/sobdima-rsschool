import {
  WSRequest,
  WSResponse,
} from '../utils/types';

let websocket: WebSocket | null = null;

const listeners: { [id: string]: (response: WSResponse) => void } = {};

// Create WebSocket-connection
export function connect(url: string) {
  websocket = new WebSocket(url);

  websocket.onopen = () => {
    console.log('Dima has opened [WebSocket]');
  };

  websocket.onmessage = (event) => {
    const message: WSResponse = JSON.parse(event.data);
    console.log('Dima has a message from [WebSocket]:', message);

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


// Универсальная функция отправки строго типизированного запроса
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



















/////////////////////////////////////////////////////////
/* const pendingRequests = new Map<string, {resolve: (data: any) => void, reject: (err: any) => void}>();

export function connect(url: string): WebSocket {
  websocket = new WebSocket(url);

  websocket.onopen = () => {
    console.log('Dima has opened WebSocket ooohaaa ! ! !');
  }

  websocket.onerror = (error) => {
    console.log(`Dima has found an error: ${error}`);
  }

  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Dima has a message from server: ', data);

    const { id, type, payload } = data;

    if (id && pendingRequests.has(id)) {
      const { resolve, reject } = pendingRequests.get(id)!;

      if (type === "ERROR") {
        reject(new Error(payload.error));
      } else {
        resolve(data);
      }

      pendingRequests.delete(id);
    }
  }

  websocket.onclose = () => {
    console.log('Dima has closed WebSocket');
  }

  return websocket;
}

export function getSocket(): WebSocket | null {
  return websocket;
}

export function sendRequest<ReqPayload = any, ResPayload = any>(
  message:  WSRequest<ReqPayload>
): Promise<ResPayload> {
  return new Promise((resolve, reject) => {
    if (!websocket || websocket.readyState !== WebSocket.OPEN) {
      reject(new Error("WebSocket is not connected"));
      return;
    }

    const id = message.id;
    pendingRequests.set(id, { resolve, reject });
    websocket.send(JSON.stringify(message));
  });
} */