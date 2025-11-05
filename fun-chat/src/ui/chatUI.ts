import { createButton } from "../components/button";
import { createSpan } from "../components/span";
import { getMessageHistory, setSelectedUser, setupMessageSending, updateSendControls } from "../services/messagesService";
import { Message, User } from "../utils/types";

export function renderUsersList(active: User[], inactive: User[]) {
  const username = localStorage.getItem('username');
  const usersList = document.querySelector('.users-list');
  if (!usersList) return;

  usersList.innerHTML = '';

  const render = (users: User[], isOnline: boolean) => {
    users.forEach((user) => {
      if (user.login === username) return;

      const userSpan = createSpan(`user-name ${isOnline ? 'online' : 'offline'}`, `${isOnline ? `🟢 ${user.login}` : user.login}`);

      userSpan.addEventListener('click', async () => {
        usersList.querySelectorAll('.user-name.selected').forEach(elem => elem.classList.remove('selected'));
        userSpan.classList.add('selected');
        setSelectedUser(user.login);
        setupMessageSending();
        const history = await getMessageHistory(user.login);
        console.log('история сообщений', history);
        if (history.payload.messages) renderMessageHistory(history.payload.messages, user.login);
        createCloseChatButton();
      })

      usersList.append(userSpan);
    })
  }

  render(active, true);
  render(inactive, false);
}

export function renderMessageHistory(messages: Message[], userLogin: string) {
  const chatArea = document.querySelector('.chat-window');
  if (!chatArea) return;

  chatArea.innerHTML = '';

  messages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(message.from === userLogin ? 'received' : 'sent');
    
    const time = new Date(message.datetime).toLocaleTimeString();

    const statusIcons = {
      delivered: message.status.isDelivered ? '✓' : '',
      read: message.status.isReaded ? '✓✓' : '',
      edited: message.status.isEdited ? '(edited)' : ''
    };

    messageElement.innerHTML = `
      <div class="message-header">
        <span class="time">${time}</span>
        <span class="author">${message.from}</span>
      </div>
      <div class="message-content">
        <span class="text">${message.text}</span>
      </div>
      <div class="message-status">
        ${statusIcons.delivered}${statusIcons.read} ${statusIcons.edited}
      </div>
    `;
    
    chatArea.appendChild(messageElement);
  });

  chatArea.scrollTop = chatArea.scrollHeight;
}

function createCloseChatButton(): HTMLButtonElement | null {
  const headerArea = document.querySelector('.header-buttons') as HTMLElement | null;
  const chatArea = document.querySelector('.chat-window') as HTMLElement | null;
  if (!headerArea) return null;
  if (!chatArea) return null;

  const existingCloseButton = headerArea.querySelector('.close-chat-btn');
  if (existingCloseButton) existingCloseButton.remove();

  const btn = createButton({text: 'Close Chat', type: 'button', id: 'close-chat-btn'});

  btn.addEventListener('click', () => {
    const usersList = document.querySelector('.users-list');
    usersList?.querySelectorAll('.user-name.selected').forEach(el => el.classList.remove('selected'));

    setSelectedUser(null);

    chatArea.innerHTML = '';
    btn.remove();
  })

  headerArea.prepend(btn);

  return btn;
}