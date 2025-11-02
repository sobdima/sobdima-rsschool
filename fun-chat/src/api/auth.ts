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
