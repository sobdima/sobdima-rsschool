import { getMessageHistory, getMessageReadStatus } from "../api/messages";
import { appendMessage } from "../ui/chatUI";
import { createUnreadDivider } from "../utils/createMsgDivider";
import { Message } from "../utils/types";
import { cleanupMessageObserver, observeUnreadMessages } from "./unreadMsgObserver";
import { getSelectedUser } from "./usersService";

const MESSAGE_COUNTERS_KEY = 'messageCounters';

export const messageCounters: Record<string, number> = JSON.parse(
  localStorage.getItem(MESSAGE_COUNTERS_KEY) || '{}'
);

export async function handleIncomingMessage(message: Message) {
  const selected = getSelectedUser();
  if (selected === message.from) {
    appendMessage(message);

    cleanupMessageObserver();
    observeUnreadMessages();

    const chatArea = document.querySelector('.chat-window') as HTMLElement | null;
    const messageElement = document.querySelector(`[data-message-id="${message.id}"]`) as HTMLElement | null;

    if (!chatArea || !messageElement) return;

    const containerRect = chatArea.getBoundingClientRect();
    const elRect = messageElement.getBoundingClientRect();
    const isVisible = elRect.top >= containerRect.top && elRect.bottom <= containerRect.bottom;

    if (!isVisible) {
      incrementMessageCounter(message.from);

      if (!chatArea.querySelector('.unread-divider')) {
        const divider = createUnreadDivider();
        chatArea.insertBefore(divider, messageElement);
      }
    } else {
      if (message.id) {
        try {
          await getMessageReadStatus(message.id);
          messageElement.removeAttribute('data-unread');
        } catch (err) {
          console.error('Error marking message read on visibility:', err);
        }
      }
    }
  } else {
    incrementMessageCounter(message.from);
  }
}

function incrementMessageCounter(username: string) {
  if (!messageCounters[username]) {
    messageCounters[username] = 0;
  }
  messageCounters[username]++;

  localStorage.setItem(MESSAGE_COUNTERS_KEY, JSON.stringify(messageCounters));

  updateUserMessagesCounter(username, messageCounters[username]);
}

export function decrementMessageCounter(username: string) {
  if (messageCounters[username] && messageCounters[username] > 0) {
    messageCounters[username]--;
    localStorage.setItem(MESSAGE_COUNTERS_KEY, JSON.stringify(messageCounters));
    updateUserMessagesCounter(username, messageCounters[username]);
  }
}

export function updateUserMessagesCounter(username: string, count: number) {
  const userContainers = document.querySelectorAll('.user-container');

  userContainers.forEach((container) => {
    const nameEl = container.querySelector('.user-name');
    const msgEl = container.querySelector('.user-msg-count') as HTMLElement | null;

    if (nameEl?.textContent?.trim() === username && msgEl) {
      if (count && count > 0) {
        msgEl.setAttribute('data-message-count', count.toString());
        msgEl.classList.add('has-messages');
      } else {
        msgEl.removeAttribute('data-message-count');
        msgEl.classList.remove('has-messages');
      }
    }
  });
}

export async function restoreMessageCounters(usernames: string[]) {
  try {
    const requests = usernames.map(username =>
      getMessageHistory(username)
        .then(res => ({ username, res }))
        .catch(() => ({ username, res: null }))
    );

    const results = await Promise.all(requests);

    results.forEach(({ username, res }) => {
      if (!res || !res.payload || !Array.isArray(res.payload.messages)) return;

      const msgs = res.payload.messages as Message[];

      const undeliveredCount = msgs.filter(
        m => m.from === username && m.status && m.status.isReaded === false
      ).length;

      messageCounters[username] = undeliveredCount;

      if (undeliveredCount > 0) {
        updateUserMessagesCounter(username, undeliveredCount);
      }
    });

    localStorage.setItem(MESSAGE_COUNTERS_KEY, JSON.stringify(messageCounters));
  } catch (error) {
    console.error('Failed to restore message counters:', error);
  }
}