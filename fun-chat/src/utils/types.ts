export type Route = {
  path: string;
  component: () => HTMLElement;
};


//WEBSOCKET
export interface WSRequest<T = unknown> {
  id: string;
  type: string;
  payload: T;
}

export interface WSResponse<T = unknown> {
  id: string | null;
  type: string;
  payload: T;
}


//LOGIN
export interface LogRequestPayload {
  user: {
    login: string;
    password: string;
  };
}

export interface LogResponsePayload {
  user: {
    login: string;
    isLogined: boolean;
  };
}
export interface ErrorPayload {
  error: string;
}


// USERS
export interface User {
  login: string;
  isLogined: boolean;
}

export interface UserListPayload {
  users: User[];
}

export type UserAuthStatus = 'authorized' | 'unauthorized';

export interface UserActiveResponse extends WSResponse {
  type: 'USER_ACTIVE';
  payload: UserListPayload;
}

export interface UserInactiveResponse extends WSResponse {
  type: 'USER_INACTIVE';
  payload: UserListPayload;
}

export interface ExternalUserPayload {
  user: {
    login: string;
    isLogined: boolean;
  }
}


// MESSAGES
export interface MessageStatus {
  isDelivered: boolean;
  isReaded: boolean;
  isEdited: boolean;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  text: string;
  datetime: number;
  status: MessageStatus;
}

export interface MessageHistoryRequest {
  user: {
    login: string;
  }
}

export interface MessageHistoryResponse {
  messages: Message[];
}

export interface MsgSendPayload {
  message: Message;
}

export interface MsgReadRequest {
  message: {
    id: string;
  }
}

export interface MsgReadResponse {
  message: {
    id: string;
    status: {
      isReaded: boolean;
    }
  }
}