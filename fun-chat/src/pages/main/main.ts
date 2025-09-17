import { createButton } from '../../components/button';
import { createInput } from '../../components/input';
import { createDiv } from '../../components/div';
import { createSpan } from '../../components/span';
import './main.css';
import { ErrorPayload } from '../../utils/types';
//import { logOutUser } from '../../api/auth';
import { handleRouting } from '../../router/router';
import { loginUser, logoutUser } from '../../api/auth';

export function createChatPage(): HTMLElement {
  // === HEADER ===
  const container = createDiv('chat-container');
  const header = createDiv('chat-header');

  // Получаем имя текущего пользователя из sessionStorage
  const userSession = JSON.parse(sessionStorage.getItem('user') || '{}');
  const currentUsername = userSession.login || 'Unknown User';

  const userSpan = createSpan('current-user', currentUsername);
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
  header.append(userSpan, chatNameSpan, headerButtons);



  // === MAIN ===
  const main = createDiv('chat-main');
  const leftSection = createDiv('left-section');
  const rightSection = createDiv('right-section');

  const searchInput = createInput({
    type: 'text',
    id: 'user-search',
    placeholder: 'Search users...'
  });

  const usersList = createDiv('users-list');

  leftSection.append(searchInput, usersList);

  // Окно переписки
  const chatWindow = createDiv('chat-window');
  const chatPlaceholder = document.createElement('div');
  chatPlaceholder.className = 'chat-placeholder';
  chatPlaceholder.textContent = 'Select a user to start chatting';
  chatWindow.appendChild(chatPlaceholder);

  // Область ввода сообщения
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

  // Изначально кнопка отправки неактивна
  sendButton.disabled = true;

  messageInputArea.append(messageInput, sendButton);
  rightSection.append(chatWindow, messageInputArea);

  main.append(leftSection, rightSection);



  // === FOOTER ===
  const footer = createDiv('chat-footer');

  // Создаем три ссылки-заглушки (вы их потом замените)
  const link1 = document.createElement('a');
  link1.href = '#';
  link1.textContent = 'Link 1';

  const link2 = document.createElement('a');
  link2.href = '#';
  link2.textContent = 'Link 2';

  const link3 = document.createElement('a');
  link3.href = '#';
  link3.textContent = 'Link 3';

  footer.append(link1, link2, link3);

  // Собираем всю страницу
  container.append(header, main, footer);

  // Инициализируем обработчики
  //initializeChatHandlers(messageInput, sendButton, searchInput, usersList);

  return container;
}

const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
const isReload = navigation.type === "reload";
const isChatPage = window.location.hash === "#chat";

if (isReload && isChatPage) {
  sessionStorage.setItem("wasReloaded", "true");
} else {
  sessionStorage.removeItem("wasReloaded");
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

  const wasReloaded = sessionStorage.getItem("wasReloaded") === "true";

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
  }

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