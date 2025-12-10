import { editMessage, sendMessage } from "../api/messages";
import { sendRequest } from "../api/ws";
import { createButton } from "../components/button";
import { appendMessage } from "../ui/chatUI";
import { MsgSendPayload } from "../utils/types";
import { getSelectedUser, selectedUser } from "./usersService";

const processedMessages = new Set<string>();
let currentEditingMessageId: string | null = null;

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

  input.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      if (!input.dataset.editHandler) {
        sendButton.click();
      }
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
  }
}

export function handleEditMessage(messageId: string, originalText: string) {
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const sendButton = document.getElementById('send-message-button') as HTMLButtonElement;
  const messageInputArea = document.querySelector('.message-input-area') as HTMLElement;

  if (!messageInput || !sendButton || !messageInputArea) return;

  currentEditingMessageId = messageId;

  messageInput.value = originalText;
  messageInput.focus();

  sendButton.style.display = 'none';

  let acceptButton = document.getElementById('edit-message-button') as HTMLButtonElement;
  if (!acceptButton) {
    acceptButton = createButton({text: 'Accept', id: 'edit-message-button', type: 'button'});
    messageInputArea.appendChild(acceptButton);
  } else {
    acceptButton.style.display = 'block';
  }

  const handleAccept = async () => {
    const newText = messageInput.value.trim();

    if (!newText || !currentEditingMessageId) {
      cancelEdit();
      return;
    }

    try {
      const response = await editMessage(currentEditingMessageId, newText);

      if (response.type === 'MSG_EDIT') {
        const payload = response.payload as {message?: { id: string; text: string; status: { isEdited: boolean; } } };

        if (payload?.message?.id && payload.message.text !== undefined) {
          updateMessageInDOM(
            payload.message.id,
            payload.message.text,
            payload.message.status.isEdited
          );
        }
      }
    } catch (error) {
      console.error('Error editing message:', error);
    }

    cancelEdit();
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAccept();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  }

  acceptButton.onclick = handleAccept;
  messageInput.addEventListener('keydown', handleKeyPress);

  messageInput.dataset.editHandler = 'true';
}

function cancelEdit() {
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const sendButton = document.getElementById('send-message-button') as HTMLButtonElement;
  const acceptButton = document.getElementById('edit-message-button') as HTMLButtonElement;

  if (messageInput) {
    messageInput.value = '';
    delete messageInput.dataset.editHandler;
  }

  if (sendButton) {
    sendButton.style.display = 'block';
  }

  if (acceptButton) {
    acceptButton.style.display = 'none';
    acceptButton.onclick = null;
  }

  currentEditingMessageId = null;
}

export function updateMessageInDOM(messageId: string, newText: string, isEdited: boolean) {
  const messageElement = document.querySelector(`[data-message-id="${messageId}"]`);

  if (!messageElement) return;

  const textSpan = messageElement.querySelector('.message-content .text');
  if (textSpan) {
    textSpan.textContent = newText;
  }

  const statusDiv = messageElement.querySelector('.message-status');
  if (statusDiv && isEdited) {
    const currentStatus = statusDiv.textContent || '';
    if (!currentStatus.includes('(edited)')) {
      statusDiv.textContent = currentStatus + ' (edited)';
    }
  }
}