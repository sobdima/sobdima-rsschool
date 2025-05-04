//import { MessageHandler } from './components/types';

type MessageHandler = (data: any) => void;

export class WebSocketService {
  private socket: WebSocket | null = null;
  private url: string;
  private userName: string;
  private onMessageHandler: MessageHandler | null = null;
  private password: string = '';

  constructor(url: string, userName: string, password: string) {
    this.url = url;
    this.userName = userName;
    this.password = password;
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.addEventListener('open', () => {
      console.log('✅ WebSocket connection established');
      this.authorize();
    });

    this.socket.addEventListener('message', (event) => {
      console.log('📩 New message from server:', event.data);
      const data = JSON.parse(event.data);
      if (this.onMessageHandler) {
        this.onMessageHandler(data);
      }
    });

    this.socket.addEventListener('close', () => {
      console.log('❌ WebSocket connection closed');
    });

    this.socket.addEventListener('error', (error) => {
      console.error('⚠️ WebSocket error:', error);
    });
  }

  private authorize() {
    const authMessage = {
      id: Date.now().toString(),
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: this.userName,
          password: this.password,
        }
      }
    };

    this.send(authMessage);
  }

  onMessage(handler: MessageHandler) {
    this.onMessageHandler = handler;
  }

  send(data: any) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.warn('Socket is not open.');
    }
  }

  disconnect() {
    this.socket?.close();
  }
}





/* export class WebSocketService {
  private socket: WebSocket | null = null;
  private url: string;
  private userName: string;
  private userPassword: string = '';
  private onMessageHandler: MessageHandler | null = null;

  constructor(url: string, userName: string, userPassword: string) {
    this.url = url;
    this.userName = userName;
    this.userPassword = userPassword;
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.addEventListener('open', () => {
      console.log('WebSocket connection established');
      this.authorize();
    });

    this.socket.addEventListener('message', (event) => {
      console.log('New message from server:', event.data);
      const data = JSON.parse(event.data);
      if (this.onMessageHandler) {
        this.onMessageHandler(data);
      }
    });

    this.socket.addEventListener('close', () => {
      console.log('WebSocket connection closed');
    });

    this.socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });
  }

  private authorize() {
    const authMessage = {
      id: Date.now().toString(),
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: this.userName,
          password: this.userPassword,
        },
      },
    };

    this.send(authMessage);
  }

  onMessage(handler: MessageHandler) {
    this.onMessageHandler = handler;
  }

  send(data: any) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.warn('Socket is not open.');
    }
  }

  disconnect() {
    this.socket?.close();
  }
} */

/* type MessageHandler = (data: any) => void;

interface WebSocketClientOptions {
  url: string;
  handshakePayload?: object;
  reconnectInterval?: number; // мс
}

export class WebSocketClient {
  private socket!: WebSocket;
  private url: string;
  private handshakePayload?: object;
  private reconnectInterval: number;
  private isManuallyClosed: boolean = false;
  private messageHandler?: MessageHandler;

  constructor(options: WebSocketClientOptions) {
    this.url = options.url;
    this.handshakePayload = options.handshakePayload;
    this.reconnectInterval = options.reconnectInterval || 5000;
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket(this.url);

    this.socket.addEventListener('open', () => {
      console.log('[WebSocket] Соединение установлено.');

      if (this.handshakePayload) {
        this.send(this.handshakePayload);
      }
    });

    this.socket.addEventListener('message', (event) => {
      console.log('[WebSocket] Сообщение получено:', event.data);
      if (this.messageHandler) {
        this.messageHandler(event.data);
      }
    });

    this.socket.addEventListener('error', (event) => {
      console.error('[WebSocket] Ошибка:', event);
    });

    this.socket.addEventListener('close', (event) => {
      console.warn(
        `[WebSocket] Соединение закрыто (код: ${event.code}, причина: ${event.reason})`,
      );
      if (!this.isManuallyClosed) {
        console.log(
          `[WebSocket] Переподключение через ${this.reconnectInterval} мс...`,
        );
        setTimeout(() => this.connect(), this.reconnectInterval);
      }
    });
  }

  public send(data: object | string) {
    const payload = typeof data === 'string' ? data : JSON.stringify(data);
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(payload);
    } else {
      console.warn('[WebSocket] Невозможно отправить сообщение, сокет закрыт.');
    }
  }

  public onMessage(handler: MessageHandler) {
    this.messageHandler = handler;
  }

  public close() {
    this.isManuallyClosed = true;
    this.socket.close();
  }
} */
