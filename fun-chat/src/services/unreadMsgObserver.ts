import { getMessageReadStatus } from "../api/messages";
import { decrementMessageCounter } from "./unreadMessagesCounterService";
import { getSelectedUser } from "./usersService";

let messageObserver: IntersectionObserver | null = null;
let dividerObserver: IntersectionObserver | null = null;
const markedAsReadIds = new Set<string>();

const trackedDividers = new WeakMap<HTMLElement, boolean>();

export function initializeMessageObserver() {

  if (messageObserver) {
    messageObserver.disconnect();
  }

  messageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(async (entry) => {

        if (entry.isIntersecting) {
          const messageElement = entry.target as HTMLElement;
          const messageId = messageElement.getAttribute('data-message-id');

          const messageFrom = getSelectedUser();

          if (messageId && !markedAsReadIds.has(messageId)) {
            markedAsReadIds.add(messageId);

            try {
              await getMessageReadStatus(messageId);

              messageElement.removeAttribute('data-unread');
              messageObserver?.unobserve(messageElement);

              if (messageFrom) {
                decrementMessageCounter(messageFrom);
              }

            } catch (error) {
              console.error(`Error reading message ${messageId}:`, error);
              markedAsReadIds.delete(messageId);
            }
          }
        }
      });
    },
    {
      root: document.querySelector('.chat-window'),
      rootMargin: '0px',
      threshold: 0.8
    }
  );

  return messageObserver;
}

function initializeDividerObserver() {
  if (dividerObserver) {
    dividerObserver.disconnect();
  }

  dividerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const divider = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          trackedDividers.set(divider, true);
        } else if (trackedDividers.get(divider)) {
          divider.remove();
          dividerObserver?.unobserve(divider);
        }

      });
    },
    {
      root: document.querySelector('.chat-window'),
      rootMargin: '0px',
      threshold: 0
    }
  );
}

export function observeUnreadMessages() {
  if (!messageObserver) {
    initializeMessageObserver();
  }

  if (!dividerObserver) {
    initializeDividerObserver();
  }

  const chatArea = document.querySelector('.chat-window');
  if (!chatArea) return;

  const unreadMessages = chatArea.querySelectorAll('[data-unread="true"]');
  const divider = chatArea.querySelector('.unread-divider');

  unreadMessages.forEach(messageElement => {
    messageObserver?.observe(messageElement);
  });

  if (divider) {
    dividerObserver?.observe(divider);
  }
}

export function cleanupMessageObserver() {
  if (messageObserver) {
    messageObserver.disconnect();
    messageObserver = null;
  }

  if (dividerObserver) {
    dividerObserver.disconnect();
    dividerObserver = null;
  }
  markedAsReadIds.clear();
}