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

const USERNAME_KEY = 'username';

export function renderUsersList(active: User[], inactive: User[]) {
  const username = localStorage.getItem(USERNAME_KEY);
  const usersList = document.querySelector('.users-list');
  if (!usersList) return;

  usersList.innerHTML = '';

  const render = (users: User[], isOnline: boolean) => {
    users.forEach((user) => {
      if (user.login === username) return;

      const userSpan = createSpan(`user-name ${isOnline ? 'online' : 'offline'}`, user.login);

      const messageCount = messageCounters[user.login] || 0;
      if (messageCount > 0) {
        userSpan.setAttribute('data-message-count', messageCount.toString());
        userSpan.classList.add('has-messages');
      }

      userSpan.addEventListener('click', async () => {
        usersList.querySelectorAll('.user-name.selected').forEach(elem => {
          elem.classList.remove('selected')
        });
        userSpan.classList.add('selected');
        setSelectedUser(user.login);
        setupMessageSending();

        const history = await getMessageHistory(user.login);

        if (history.payload.messages) {
          renderMessageHistory(history.payload.messages);
        };

        createCloseChatButton();
      })

      usersList.append(userSpan);
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
    btn.remove();

    cleanupMessageObserver();
  })

  headerArea.prepend(btn);

  return btn;
}

export function appendMessage(message: Message) {
  const chatArea = document.querySelector('.chat-window');
  if(!chatArea) return;

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

  const time = new Date(message.datetime).toLocaleTimeString();

  const statusIcons = {
      delivered: message.status.isDelivered ? '✓' : '',
      read: message.status.isReaded ? '✓' : '',
      edited: message.status.isEdited ? '(edited)' : ''
    };

  if (isSentMessage) {
    messageElement.innerHTML = `
      <div class="message-header">
        <span class="time">${time}</span>
        <span class="edit">✎</span>
        <span class="delete">🗙</span>
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
        handleEditMessage(message.id, currentMessageText.textContent)
      } else {
        handleEditMessage(message.id, message.text);
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
