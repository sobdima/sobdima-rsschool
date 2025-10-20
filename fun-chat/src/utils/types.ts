export type Route = {
  path: string;
  component: () => HTMLElement;
};

export type UserAuthStatus = 'authorized' | 'unauthorized';

export interface UserListPayload {
  users: Array<{
    login: string;
    isLogined: boolean;
  }>;
}

export interface UserActiveResponse extends WSResponse {
  type: 'USER_ACTIVE';
  payload: UserListPayload;
}

export interface UserInactiveResponse extends WSResponse {
  type: 'USER_INACTIVE';
  payload: UserListPayload;
}

// (WebSocket Request)
export interface WSRequest<T = unknown> {
  id: string;
  type: string;
  payload: T;
}
// (WebSocket Response)
export interface WSResponse<T = unknown> {
  id: string | null;
  type: string;
  payload: T;
}


// CLIENT -> SERVER
export interface LogRequestPayload {
  user: {
    login: string;
    password: string;
  };
}


// SERVER -> CLIENT
export interface LogResponsePayload {
  user: {
    login: string;
    isLogined: boolean;
  };
}
export interface ErrorPayload {
  error: string;
}

export interface ExternalUserPayload {
  user: {
    login: string;
    isLogined: boolean;
  }
}
