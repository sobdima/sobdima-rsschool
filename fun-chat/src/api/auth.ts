/* import { sendRequest } from './ws';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  LogoutRequestPayload,
  LogoutSuccessPayload,
  ErrorPayload,
  WSResponse,
} from '../utils/types';

export async function loginUser(
  username: string,
  password: string
): Promise<WSResponse<LoginSuccessPayload | ErrorPayload>> {
  return sendRequest<LoginRequestPayload, LoginSuccessPayload | ErrorPayload>(
    'USER_LOGIN',
    { user: { login: username, password } }
  );
}

export function isAuthenticated(): boolean {
  //return localStorage.getItem('isAuthenticated') === 'true';
  const userSession = JSON.parse(sessionStorage.getItem('user') || '{}');
  return userSession.isLogined;
}

export async function logoutUser(
  username: string,
  password: string
): Promise<WSResponse<LogoutSuccessPayload | ErrorPayload>> {
  return sendRequest<LogoutRequestPayload, LogoutSuccessPayload | ErrorPayload>(
    'USER_LOGOUT',
    { user: { login: username, password } }
  );
} */

import { sendRequest } from './ws';
import {
  LogRequestPayload,
  LogResponsePayload,
  ErrorPayload,
  WSResponse,
} from '../utils/types';

export async function loginUser(
  username: string,
  password: string
): Promise<WSResponse<LogResponsePayload | ErrorPayload>> {
  return sendRequest<LogRequestPayload, LogResponsePayload | ErrorPayload>(
    'USER_LOGIN',
    { user: { login: username, password: password } }
  );
}

export async function logoutUser(
  username: string,
  password: string
): Promise<WSResponse<LogResponsePayload | ErrorPayload>> {
  return sendRequest<LogRequestPayload, LogResponsePayload | ErrorPayload>(
    'USER_LOGOUT',
    { user: { login: username, password: password } }
  );
}

export function isAuthenticated(): boolean {
  const raw = localStorage.getItem('username');

  if (!raw) {
    return false;
  }

  return true;
}






































/////////////////////////////////////////////////////////////////////
/* import { WSRequest } from '../utils/types';
import { generateId, sendRequest } from './ws';

export async function loginUser(login: string, password: string) {
  const request: WSRequest<{ user: { login: string; password: string } }> = {
    id: generateId(),
    type: "USER_LOGIN",
    payload: {
      user: { login, password },
    },
  };

  return sendRequest(request);
}

export async function logOutUser(login: string, password: string) {
  const userSession = JSON.parse(localStorage.getItem('user') || '{}') as UserSession;

  const request: WSRequest<{ user: { login: string; password: string } }> = {
    id: userSession.id,
    type: "USER_LOGOUT",
    payload: {
      user: { login, password },
    },
  };

  return sendRequest(request);
}

export function isAuthenticated(): boolean {
  const raw = localStorage.getItem('user');
  if (!raw) return false;

  try {
    const userSession = JSON.parse(raw) as UserSession;
    return !!userSession.payload?.user?.isLogined;
  } catch {
    return false;
  }
} */