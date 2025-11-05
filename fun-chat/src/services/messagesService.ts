import { sendRequest } from "../api/ws";
import { Message, MessageHistoryRequest, MessageHistoryResponse, MsgSendPayload, WSResponse } from "../utils/types";

let selectedUser: string | null = null;

export function setSelectedUser(username: string | null) {
  selectedUser = username;
  updateSendControls();
}
export function getSelectedUser() {
  return selectedUser;
}

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

  if (!sendButton || !input) return;

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
      console.log('респонс при отправке сообщения', sentMsg);
      // 3️⃣ Добавляем его в чат
      //if (sentMsg) appendMessage(sentMsg, true);

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

