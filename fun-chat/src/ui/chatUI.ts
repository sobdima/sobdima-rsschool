import { getMessageDeleteStatus, getMessageHistory } from "../api/messages";
import { createButton } from "../components/button";
import { createConfirmDialog } from "../utils/modal";
import { createSpan } from "../components/span";
import { handleEditMessage, removeMessageById, setupMessageSending } from "../services/messagesService";
import { messageCounters } from "../services/unreadMessagesCounterService";
import { cleanupMessageObserver, observeUnreadMessages } from "../services/unreadMsgObserver";
import { setSelectedUser } from "../services/usersService";
import { createUnreadDivider } from "../utils/createMsgDivider";
import { Message, User } from "../utils/types";
import { selectedUserPlaceholder } from "../utils/placeholders";
import { createDiv } from "../components/div";
import { CharCounter } from "../utils/charCounter";

const USERNAME_KEY = 'username';

export function renderUsersList(active: User[], inactive: User[]) {
  const username = localStorage.getItem(USERNAME_KEY);
  const usersList = document.querySelector('.users-list');
  if (!usersList) return;

  usersList.innerHTML = '';

  const render = (users: User[], isOnline: boolean) => {
    users.forEach((user) => {
      if (user.login === username) return;

      const userDiv = createDiv('user-container');
      const statusSpan = createSpan(`user-status ${isOnline ? 'online' : 'offline'}`, '');
      const userSpan = createSpan(`user-name`, user.login);
      const msgSpan = createSpan('user-msg-count', '');

      const messageCount = messageCounters[user.login] || 0;
      if (messageCount > 0) {
        msgSpan.setAttribute('data-message-count', messageCount.toString());
        msgSpan.classList.add('has-messages');
      }

      userDiv.addEventListener('click', async () => {
        usersList.querySelectorAll('.user-name.selected').forEach(elem => {
          elem.classList.remove('selected')
        });
        userSpan.classList.add('selected');
        setSelectedUser(user.login);
        setupMessageSending();

        const history = await getMessageHistory(user.login);

        if (history.payload.messages && history.payload.messages.length > 0) {
          renderMessageHistory(history.payload.messages);
        } else {
          const chatArea = document.querySelector('.chat-window');
          if (chatArea) {
            chatArea.innerHTML = '';
            chatArea.append(selectedUserPlaceholder(`start messaging with ${user.login}`));
          }
        }

        createCloseChatButton();
      })

      usersList.append(userDiv);
      userDiv.append(statusSpan);
      userDiv.append(userSpan);
      userDiv.append(msgSpan);
    })
  }

  render(active, true);
  render(inactive, false);
}

export function renderMessageHistory(messages: Message[]) {
  const username = localStorage.getItem(USERNAME_KEY);
  const chatArea = document.querySelector('.chat-window');
  if (!chatArea) return;

  chatArea.innerHTML = '';

  const firstUnreadIndex = messages.findIndex(msg =>
    msg.to === username && !msg.status.isReaded
  );

  messages.forEach((message, index) => {
    if (index === firstUnreadIndex && firstUnreadIndex !== -1) {
      const divider = createUnreadDivider();
      chatArea.appendChild(divider);
    }

    chatArea.appendChild(createMessageElement(message));
  });

  setTimeout(() => {
    scrollToFirstUnread();
  }, 100);

  setTimeout(() => {
    observeUnreadMessages()
  }, 200);
}

function createCloseChatButton(): HTMLButtonElement | null {
  const headerArea = document.querySelector('.header-buttons') as HTMLDivElement | null;
  const chatArea = document.querySelector('.chat-window') as HTMLElement | null;
  if (!headerArea) return null;
  if (!chatArea) return null;

  const existingCloseButton = headerArea.querySelector('#close-chat-btn');

  if (existingCloseButton) existingCloseButton.remove();

  const btn = createButton({text: 'Close Chat', type: 'button', id: 'close-chat-btn'});

  btn.addEventListener('click', () => {
    const usersList = document.querySelector('.users-list');
    usersList?.querySelectorAll('.user-name.selected').forEach(el => el.classList.remove('selected'));

    setSelectedUser(null);

    chatArea.innerHTML = '';
    chatArea.appendChild(selectedUserPlaceholder('Select a user to start chatting'));
    CharCounter.close();
    btn.remove();

    cleanupMessageObserver();
  })

  headerArea.prepend(btn);

  return btn;
}

export function appendMessage(message: Message) {
  const chatArea = document.querySelector('.chat-window');
  if(!chatArea) return;

  const placeholder = document.querySelector('.main-placeholder');
  if (placeholder) {
    placeholder.remove();
  }

  chatArea.appendChild(createMessageElement(message));
}

function createMessageElement(message: Message): HTMLDivElement {
  const username = localStorage.getItem(USERNAME_KEY);
  if(!username) throw new Error('Username not found in localStorage');

  const messageElement = document.createElement('div');
  const isSentMessage = message.from === username;
  const isUnread = !isSentMessage && !message.status.isReaded;

  messageElement.classList.add('message', isSentMessage ? 'sent' : 'received');

  messageElement.setAttribute('data-message-id', message.id);

  if (isUnread) {
    messageElement.setAttribute('data-unread', 'true');
  }

  const time = new Date(message.datetime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const statusIcons = {
      delivered: message.status.isDelivered ? '✓' : '',
      read: message.status.isReaded ? '✓' : '',
      edited: message.status.isEdited ? '(edited)' : ''
    };

  if (isSentMessage) {
    messageElement.innerHTML = `
      <div class="message-header">
        <span class="time">${time}</span>
        <span class="edit">
          <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#7a7a7a" version="1.1" id="Capa_1" width="10px" height="10px" viewBox="0 0 528.899 528.899" xml:space="preserve">
            <g>
	            <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/>
            </g>
          </svg>
        </span>
        <span class="delete">X</span>
      </div>
      <div class="message-content">
        <span class="text">${message.text}</span>
      </div>
      <div class="message-status">
        ${statusIcons.delivered}${statusIcons.read} ${statusIcons.edited}
      </div>
      `;
  } else {
    messageElement.innerHTML = `
      <div class="message-header">
        <span class="time">${time}</span>
        <span class="author">${message.from}</span>
      </div>
      <div class="message-content">
        <span class="text">${message.text}</span>
      </div>
      ${statusIcons.edited ? `<div class="message-status">${statusIcons.edited}</div>` : ''}
      `;
  }

  const editIcon = messageElement.querySelector('.edit');
  const deleteIcon = messageElement.querySelector('.delete');
  const currentMessageText = messageElement.querySelector('.text');



  if (editIcon) {
    editIcon.addEventListener('click', (evt) => {
      evt.stopPropagation();

      if (currentMessageText && currentMessageText.textContent) {
        handleEditMessage(message.id, currentMessageText.textContent);
        CharCounter.editMode(currentMessageText.textContent);
      } else {
        handleEditMessage(message.id, message.text);
        CharCounter.editMode(message.text);
      }
    });
  }

  if (deleteIcon) {
    deleteIcon.addEventListener('click', async (evt) => {
      evt.stopPropagation();

      const confirm = createConfirmDialog({
        message: 'Delete message?',
        yesText: 'Yes',
        noText: 'No',
      })

      confirm.onYes(async () => {
        try {
          const response = await getMessageDeleteStatus(message.id);
          if (response?.type === "MSG_DELETE") {
            const deletedId = response.payload?.message?.id;
            const isDeleted = response?.payload?.message?.status?.isDeleted;

            if (deletedId && (isDeleted ?? true)) {
              removeMessageById(deletedId);
            }
          }
        } catch (error) {
          console.log('Error deleting message', error)
        }
      });

      confirm.onNo(() => {
        //nothing
      });

      confirm.show();
    });
  }

  return messageElement;
}

function scrollToFirstUnread() {
  const chatArea = document.querySelector('.chat-window');
  if (!chatArea) return;

  const firstUnread = chatArea.querySelector('[data-unread="true"]') as HTMLElement;

  if (firstUnread) {
    firstUnread.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    chatArea.scrollTop = chatArea.scrollHeight;
  }
}
