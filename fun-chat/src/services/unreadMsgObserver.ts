import { getMessageReadStatus } from "./messagesService";

let messageObserver: IntersectionObserver | null = null;
const markedAsReadIds = new Set<string>();

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

          if (messageId && !markedAsReadIds.has(messageId)) {
            markedAsReadIds.add(messageId);

            try {
              await getMessageReadStatus(messageId);
              console.log(`✓ Сообщение ${messageId} помечено как прочитанное`);

              messageElement.removeAttribute('data-unread');
              messageObserver?.unobserve(messageElement);
            } catch (error) {
              console.error(`Ошибка при отметке сообщения ${messageId}:`, error);
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

export function observeUnreadMessages() {
  if (!messageObserver) {
    initializeMessageObserver();
  }

  const chatArea = document.querySelector('.chat-window');
  if (!chatArea) return;

  const unreadMessages = chatArea.querySelectorAll('[data-unread="true"]');

  unreadMessages.forEach(messageElement => {
    messageObserver?.observe(messageElement);
  });

  console.log(`👁️ Наблюдаем за ${unreadMessages.length} непрочитанными сообщениями`);
}

export function cleanupMessageObserver() {
  if (messageObserver) {
    messageObserver.disconnect();
    messageObserver = null;
  }
  markedAsReadIds.clear();
}