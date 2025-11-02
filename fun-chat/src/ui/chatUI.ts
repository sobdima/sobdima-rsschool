import { createSpan } from "../components/span";
import { displayMessageHistory, getMessageHistory, setSelectedUser } from "../services/messagesService";
import { User } from "../utils/types";

export function renderUsersList(active: User[], inactive: User[]) {
  const username = localStorage.getItem('username');
  const usersList = document.querySelector('.users-list');
  if (!usersList) return;

  usersList.innerHTML = '';

  const render = (users: User[], isOnline: boolean) => {
    users.forEach((user) => {
      if (user.login === username) return;

      const userSpan = createSpan(`user-name ${isOnline ? 'online' : 'offline'}`, user.login);

      userSpan.addEventListener('click', async () => {
        setSelectedUser(user.login);
        const history = await getMessageHistory(user.login);
        if (history.payload.messages) displayMessageHistory(history.payload.messages, user.login);
      })

      usersList.append(userSpan);
    })
  }

  render(active, true);
  render(inactive, false);
}