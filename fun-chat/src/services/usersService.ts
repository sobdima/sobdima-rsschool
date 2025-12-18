import { getUsersByStatus } from "../api/users";
import { renderUsersList } from "../ui/chatUI";
import { User } from "../utils/types";
import { updateSendControls } from "./messagesService";

export let selectedUser: string | null = null;
let allActiveUsers: User[] = [];
let allInactiveUsers: User[] = [];

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

    allActiveUsers = activeUsers.payload.users;
    allInactiveUsers = inactiveUsers.payload.users;

    renderUsersList(allActiveUsers, allInactiveUsers);
  } catch (error) {
    console.error('Failed to update users list:', error);
  }
}

export function initUserSearch(inputEl: HTMLInputElement): void {
  const searchHandler = () => {
    const query = inputEl.value.trim().toLowerCase();

    if (!query) {
      renderUsersList(allActiveUsers, allInactiveUsers);
      return;
    }

    const filteredActive = allActiveUsers.filter(user =>
      user.login.toLowerCase().includes(query)
    );
    const filteredInactive = allInactiveUsers.filter(user =>
      user.login.toLowerCase().includes(query)
    );

    if (filteredActive.length === 0 && filteredInactive.length === 0) {
      const usersList = document.querySelector('.users-list');
      if (usersList) {
        usersList.innerHTML = '<div class="no-results">No users found</div>';
      }
      return;
    }

    renderUsersList(filteredActive, filteredInactive);
  };

  const debouncedSearch = debounce(searchHandler, 200);

  inputEl.addEventListener('input', debouncedSearch);
}

function debounce(fn: () => void, ms: number = 200) {
  let timeout: number | undefined;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      fn();
      timeout = undefined;
    }, ms);
  };
}