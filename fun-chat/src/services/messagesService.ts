import { sendRequest } from "../api/ws";
import { Message, MessageHistoryRequest, MessageHistoryResponse, WSResponse } from "../utils/types";

let selectedUser: string | null = null;

export function setSelectedUser(username: string) {
  selectedUser = username;
}
export function getSelectedUser() {
  return selectedUser;
}

export function displayMessageHistory(messages: Message[], userLogin: string) {
  const chatArea = document.querySelector('.chat-window');
  if (!chatArea) return;

  chatArea.innerHTML = `<h3>Chat with ${userLogin}</h3>`;

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

export async function getMessageHistory(userLogin: string): Promise<WSResponse<MessageHistoryResponse>> {
  const payload: MessageHistoryRequest = {
    user: {
      login: userLogin
    }
  }

  return sendRequest('MSG_FROM_USER', payload);
}