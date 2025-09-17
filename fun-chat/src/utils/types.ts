export type Route = {
  path: string;
  component: () => HTMLElement;
};


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
/* export interface LoginRequestPayload {
  user: {
    login: string;
    password: string;
  };
}
export interface LogoutRequestPayload {
  user: {
    login: string;
    password: string;
  };
} */
export interface LogRequestPayload {
  user: {
    login: string;
    password: string;
  };
}

// SERVER -> CLIENT
/* export interface LoginSuccessPayload {
  user: {
    login: string;
    isLogined: boolean;
  };
}
export interface LogoutSuccessPayload {
  user: {
    login: string;
    isLogined: boolean;
  };
} */
export interface LogResponsePayload {
  user: {
    login: string;
    password: string;
  };
}
export interface ErrorPayload {
  error: string;
}