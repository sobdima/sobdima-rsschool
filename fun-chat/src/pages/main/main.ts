import { createButton } from '../../components/button';
import { createInput } from '../../components/input';
import { createDiv } from '../../components/div';
import { createSpan } from '../../components/span';
import { ErrorPayload } from '../../utils/types';
import { handleRouting } from '../../router/router';
import { logoutUser } from '../../api/auth';
import './main.css';
import './chat.css';

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

  headerButtons.append(aboutButton, logoutButton);
  header.append(userNameSpan, chatNameSpan, headerButtons);



  // === MAIN ===
  const main = createDiv('chat-main');
  const leftSection = createDiv('left-section');
  const rightSection = createDiv('right-section');
  const usersList = createDiv('users-list');

  const searchInput = createInput({
    type: 'text',
    id: 'user-search',
    placeholder: 'Search users...'
  });

  leftSection.append(searchInput, usersList);

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
  messageInput.disabled = true;

  const sendButton = createButton({
    text: 'Send',
    id: 'send-message-button',
    onClick: () => {}
  });
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

  return container;
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
