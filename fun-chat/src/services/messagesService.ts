import { sendMessage } from "../api/messages";
import { sendRequest } from "../api/ws";
import { appendMessage } from "../ui/chatUI";
import { MsgSendPayload } from "../utils/types";
import { getSelectedUser, selectedUser } from "./usersService";

const processedMessages = new Set<string>();

export function updateSendControls() {
  const sendButton = document.getElementById('send-message-button') as HTMLButtonElement;
  const input = document.getElementById('message-input') as HTMLInputElement;
  const enabled = !!selectedUser;

  if (sendButton) sendButton.disabled = !enabled;
  if (input) {
    input.disabled = !enabled;
    if (enabled) input.focus();
  }
}

export function setupMessageSending() {
  const sendButton = document.getElementById('send-message-button') as HTMLButtonElement;
  const input = document.getElementById('message-input') as HTMLInputElement;
  const chatArea = document.querySelector('.chat-window') as HTMLElement;

  if (!sendButton || !input || !chatArea) return;

  updateSendControls();

  sendButton.addEventListener('click', async () => {
    const to = getSelectedUser();
    const text = input.value.trim();

    if (!to) {
      alert('Choose a User for chat');
      return;
    }

    if (!text) return;

    try {
      const response = await sendMessage(to, text);
      const sentMsg = response.payload?.message;

      const messageKey = JSON.stringify({
        from: (response.payload as MsgSendPayload).message.from,
        text: (response.payload as MsgSendPayload).message.text,
        time: (response.payload as MsgSendPayload).message.datetime,
      });

      if (!processedMessages.has(messageKey)) {
        processedMessages.add(messageKey);
        appendMessage(sentMsg);
        chatArea.scrollTop = chatArea.scrollHeight;

        setTimeout(() => {
          processedMessages.delete(messageKey);
        }, 700);
      }

      input.value = '';
    } catch (err) {
      console.error('Не удалось отправить сообщение:', err);
    }
  });
}

export function removeMessageById(messageId: string) {
  const elem = document.querySelector(`.message[data-message-id="${messageId}"]`) as HTMLElement;

  if (elem) {
    const h = elem.offsetHeight;
    elem.style.height = h + 'px';
    elem.style.boxSizing = 'border-box';
    elem.getBoundingClientRect();
    elem.classList.add('removing');

    elem.addEventListener('transitionend', () => {
      elem.remove();
    }, { once: true });

    //elem.remove();
  }
}