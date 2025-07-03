import { sendRequest } from './ws';
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
}