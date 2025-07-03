export interface InputOptions {
  type: string;
  placeholder: string;
  className?: string;
  id: string;
  required?: boolean;
}

export interface ButtonOptions {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id: string;
  onClick?: () => void;
}

export type Route = {
  path: string;
  component: () => HTMLElement;
};




// Тип запроса клиента
export interface WSRequest<T = unknown> {
  id: string;
  type: WSRequestType;
  payload: T;
}

// Тип ответа от сервера
export interface WSResponse<T = unknown> {
  id: string | null;
  type: WSResponseType;
  payload: T;
}

// Типы запросов
export type WSRequestType = 'USER_LOGIN' | 'USER_LOGOUT';
export type WSResponseType = 'USER_LOGIN' | 'USER_LOGOUT' | 'ERROR';



// Payloads

// CLIENT -> SERVER
export interface LoginRequestPayload {
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
}

// SERVER -> CLIENT (успех)
export interface LoginSuccessPayload {
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
}

// SERVER -> CLIENT (ошибка)
export interface ErrorPayload {
  error: string;
}

//export type MessageHandler = (data: any) => void;