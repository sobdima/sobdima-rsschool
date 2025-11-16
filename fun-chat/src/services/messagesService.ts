import { sendRequest } from "../api/ws";
import { appendMessage } from "../ui/chatUI";
import { MessageHistoryRequest, MessageHistoryResponse, MsgReadRequest, MsgReadResponse, MsgSendPayload, WSResponse } from "../utils/types";
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

export async function sendMessage(to: string, text: string): Promise<WSResponse<MsgSendPayload>> {
  const from = localStorage.getItem('username') || '';
  const payload = {
    message: {
      from,
      to,
      text,
      datetime: Date.now(),
    }
  };
  return sendRequest('MSG_SEND', payload);
}

export async function getMessageHistory(userLogin: string): Promise<WSResponse<MessageHistoryResponse>> {
  const payload: MessageHistoryRequest = {
    user: {
      login: userLogin
    }
  }

  return sendRequest('MSG_FROM_USER', payload);
}

export async function getMessageReadStatus(messageId: string): Promise<WSResponse<MsgReadResponse>> {
  const payload: MsgReadRequest = {
    message: {
      id: messageId
    }
  };

  return sendRequest('MSG_READ', payload);
}

////////////////////////////////////////////////////////////////////////////////////////
/* export async function markMessagesAsRead(messages: Message[], username: string) {

  const unreadMessages = messages.filter(msg =>
    msg.to === username && !msg.status.isReaded
  );

  const promises = unreadMessages.map(msg =>
    getMessageReadStatus(msg.id)
  );

  try {
    await Promise.all(promises);
    console.log(`Отмечено как прочитано: ${unreadMessages.length} сообщений`);
  } catch (error) {
    console.error('Ошибка при отметке сообщений как прочитанных:', error);
  }
} */
