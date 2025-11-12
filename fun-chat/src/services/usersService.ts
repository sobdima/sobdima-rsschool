import { sendRequest } from "../api/ws";
import { renderUsersList } from "../ui/chatUI";
import { UserAuthStatus, UserListPayload, WSResponse } from "../utils/types";
import { updateSendControls } from "./messagesService";

export let selectedUser: string | null = null;

export function setSelectedUser(username: string | null) {
  selectedUser = username;
  updateSendControls();
}
export function getSelectedUser() {
  return selectedUser;
}

export async function getUsersByStatus(status: UserAuthStatus): Promise<WSResponse<UserListPayload>> {
  const requestType = status === 'authorized' ? 'USER_ACTIVE' : 'USER_INACTIVE';
  return sendRequest(requestType, null);
}

export async function updateExternalUsersList() {

  try {
    const [activeUsers, inactiveUsers] = await Promise.all([
      getUsersByStatus('authorized'),
      getUsersByStatus('unauthorized')
    ]);

    renderUsersList(activeUsers.payload.users, inactiveUsers.payload.users);
  } catch (error) {
    console.error('Failed to update users list:', error);
  }
}