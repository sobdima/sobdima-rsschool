import { appendMessage } from "../ui/chatUI";
import { Message } from "../utils/types";
import { getMessageHistory } from "./messagesService";
import { getSelectedUser } from "./usersService";

const MESSAGE_COUNTERS_KEY = 'messageCounters';

export const messageCounters: Record<string, number> = JSON.parse(
  localStorage.getItem(MESSAGE_COUNTERS_KEY) || '{}'
);

export function handleIncomingMessage(message: Message) {
  if (getSelectedUser() === message.from) {
    appendMessage(message);
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
  const userElements = document.querySelectorAll('.user-name');

  userElements.forEach((el) => {
    if (el.textContent?.trim() === username) {
      if (count && count > 0) {
        el.setAttribute('data-message-count', count.toString());
        el.classList.add('has-messages');
      } else {
        el.removeAttribute('data-message-count');
        el.classList.remove('has-messages');
      }
    }
  });
}

/* export function resetMessageCounter(username: string) {
  const userElements = document.querySelectorAll('.user-name');

  if (messageCounters[username]) {
    messageCounters[username] = 0;
    localStorage.setItem(MESSAGE_COUNTERS_KEY, JSON.stringify(messageCounters));
    updateUserMessagesCounter(username, 0);
  }
} */

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