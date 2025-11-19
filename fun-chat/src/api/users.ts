import { UserAuthStatus, UserListPayload, WSResponse } from "../utils/types";
import { sendRequest } from "./ws";

export async function getUsersByStatus(status: UserAuthStatus): Promise<WSResponse<UserListPayload>> {
  const requestType = status === 'authorized' ? 'USER_ACTIVE' : 'USER_INACTIVE';
  return sendRequest(requestType, null);
}