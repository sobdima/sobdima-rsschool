import { createButton } from '../../components/button';
import { createInput } from '../../components/input';
import { createDiv } from '../../components/div';
import { createSpan } from '../../components/span';
import './main.css';
import { ErrorPayload } from '../../utils/types';
//import { logOutUser } from '../../api/auth';
import { handleRouting } from '../../router/router';
import { loginUser, logoutUser } from '../../api/auth';
import { updateExternalUsersList } from '../../api/ws';

export function createChatPage(): HTMLElement {
  const container = createDiv('chat-container');

  // === HEADER ===
  const header = createDiv('chat-header');
  const currentUsername = localStorage.getItem('username') || 'Unknown User';
  const userNameSpan = createSpan('current-user', currentUsername);
  const chatNameSpan = createSpan('chat-name', 'Fun Chat');
  const headerButtons = createDiv('header-buttons');

  const aboutButton = createButton({
    text: 'About',
    id: 'header-about-button',
    onClick: () => {
      window.location.hash = '#about';
    }
  });

  const logoutButton = createButton({
    text: 'Logout',
    id: 'header-logout-button',
    onClick: handleLogOut,
  });
  /* logoutButton.addEventListener('click', (e) => {
    handleLogOut();
  }) */
  headerButtons.append(aboutButton, logoutButton);
  header.append(userNameSpan, chatNameSpan, headerButtons);



  // === MAIN ===
  const main = createDiv('chat-main');
  const leftSection = createDiv('left-section');
  const rightSection = createDiv('right-section');
  const usersList = createDiv('users-list');
  //updateExternalUsersList();

  const searchInput = createInput({
    type: 'text',
    id: 'user-search',
    placeholder: 'Search users...'
  });

  /* const showUsers = createButton({
    text: 'Show Users',
    id: 'show-users-button',
    onClick: updateExternalUsersList
  }); */

  leftSection.append(searchInput, usersList, /* showUsers */);

  // Message Window
  const chatWindow = createDiv('chat-window');
  const chatPlaceholder = document.createElement('div');
  chatPlaceholder.className = 'chat-placeholder';
  chatPlaceholder.textContent = 'Select a user to start chatting';
  chatWindow.appendChild(chatPlaceholder);

  // Input message area
  const messageInputArea = createDiv('message-input-area');

  const messageInput = createInput({
    type: 'text',
    id: 'message-input',
    placeholder: 'Type your message...'
  });

  const sendButton = createButton({
    text: 'Send',
    id: 'send-message-button',
    onClick: handleSendMessage
  });

  // SendMessageButton is disabled
  sendButton.disabled = true;

  messageInputArea.append(messageInput, sendButton);
  rightSection.append(chatWindow, messageInputArea);

  main.append(leftSection, rightSection);



  // === FOOTER ===
  const footer = createDiv('chat-footer');
  const link1 = document.createElement('a');
  link1.href = 'https://rs.school/';
  link1.target = '_blank';
  link1.rel = 'noopener noreferrer';
  link1.textContent = 'RSSchool';

  const footerYearCreationSpan = createSpan('footer-year', '2025');

  const link3 = document.createElement('a');
  link3.href = 'https://github.com/sobdima';
  link3.target = '_blank';
  link3.rel = 'noopener noreferrer';
  link3.textContent = 'Dima Sob';

  footer.append(link1, footerYearCreationSpan, link3);

  container.append(header, main, footer);

  // Инициализируем обработчики
  //initializeChatHandlers(messageInput, sendButton, searchInput, usersList);
  //const usersList = document.querySelector(".users-list");
  return container;
}

const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
const isReload = navigation.type === "reload";
const isChatPage = window.location.hash === "#chat";

if (isReload && isChatPage) {
  localStorage.setItem("wasReloaded", "true");
} else {
  localStorage.removeItem("wasReloaded");
}

async function handleLogOut() {
  const username = (localStorage.getItem("username") ?? "").trim();
  const password = (localStorage.getItem("password") ?? "").trim();

  if (!username || !password) {
    localStorage.clear();
    window.location.hash = '#login';
    handleRouting();
    return;
  }

  /* const wasReloaded = localStorage.getItem("wasReloaded") === "true";

  if (wasReloaded) {
    try {
      const loginResponse = await loginUser(username, password);
      if (loginResponse.type !== 'USER_LOGIN') {
        alert('Re-login failed: ' + (loginResponse.payload as ErrorPayload).error);
        return;
      }
    } catch (error) {
      alert('Re-login connection error');
      return;
    }
    sessionStorage.removeItem("wasReloaded");
  } */

  try {
    const response = await logoutUser(username, password);
    console.log(response);
    if (response.type === 'USER_LOGOUT') {
      localStorage.clear();
      window.location.hash = '#login';
      handleRouting();
    } else if (response.type === 'ERROR') {
      alert('Logout failed: ' + (response.payload as ErrorPayload).error);
    }
  } catch (error) {
    alert('Connection error');
    console.error(error);
  }
}

// Обработчик отправки сообщения
function handleSendMessage() {
  const messageInput = document.getElementById('message-input') as HTMLInputElement;
  const message = messageInput.value.trim();

  if (message) {
    // TODO: Отправка сообщения через WebSocket
    console.log('Sending message:', message);
    messageInput.value = '';
  }
}

// Инициализация обработчиков событий
function initializeChatHandlers(
  messageInput: HTMLInputElement,
  sendButton: HTMLButtonElement,
  searchInput: HTMLInputElement,
  usersList: HTMLDivElement
) {
  // Обработчик поиска пользователей
  searchInput.addEventListener('input', (e) => {
    const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
    // TODO: Фильтрация списка пользователей
    console.log('Searching for:', searchTerm);
  });

  // Обработчик ввода сообщения (активация кнопки отправки)
  messageInput.addEventListener('input', (e) => {
    const message = (e.target as HTMLInputElement).value.trim();
    sendButton.disabled = message.length === 0;
  });

  // Отправка сообщения по Enter
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !sendButton.disabled) {
      handleSendMessage();
    }
  });
}