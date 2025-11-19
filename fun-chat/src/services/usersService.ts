import { getUsersByStatus } from "../api/users";
import { renderUsersList } from "../ui/chatUI";
import { updateSendControls } from "./messagesService";

export let selectedUser: string | null = null;

export function setSelectedUser(username: string | null) {
  selectedUser = username;
  updateSendControls();
}

export function getSelectedUser() {
  return selectedUser;
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