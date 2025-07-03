/* import {
  createDiv,
  createButton,
  createInput,
  createListItem,
  createParagraph,
  createSpan,
  createLink,
} from '../../utils/helpers';
import { AuthService } from '../../api/auth'; */

/* export class App {
  constructor(private container: HTMLElement) {}

  init() {
    const header = this.createHeader();
    const main = this.createMain();
    const footer = this.createFooter();

    this.container.append(header, main, footer);
  }

  private createHeader(): HTMLElement {
    const header = document.createElement('header');

    const userDiv = createDiv('user', 'your nickname: Dima#46');
    const titleDiv = createDiv('title', 'Fun Chat');
    const buttonsDiv = createDiv('buttons');

    const aboutButton = createButton({ text: 'About' });
    const logoutButton = createButton({ text: 'Logout' });

    logoutButton.addEventListener('click', () => {
      AuthService.clearCredentials();
      location.reload();
    });

    buttonsDiv.append(aboutButton, logoutButton);
    header.append(userDiv, titleDiv, buttonsDiv);

    return header;
  }

  private createMain(): HTMLElement {
    const main = document.createElement('main');

    const aside = document.createElement('aside');

    const searchInput = createInput({
      type: 'text',
      placeholder: 'find a conversation partner...',
      className: 'input search-input',
    });

    const userList = document.createElement('ul');
    userList.className = 'user-list';

    ['RobMarvin', 'thurq', 'mashaa', 'vvsar'].forEach((user) => {
      userList.append(createListItem(user));
    });

    aside.append(searchInput, userList);

    const section = document.createElement('section');
    section.className = 'chat';

    const chatHistory = createDiv('chat-history');
    chatHistory.append(createParagraph('Select a user to send a message'));

    const chatInputWrap = createDiv('chat-input-wrap');

    const messageInput = createInput({
      type: 'text',
      placeholder: 'Your message...',
      className: 'input message-input',
    });

    const sendButton = createButton({ text: 'Send' });

    chatInputWrap.append(messageInput, sendButton);

    section.append(chatHistory, chatInputWrap);
    main.append(aside, section);

    return main;
  }

  private createFooter(): HTMLElement {
    const footer = document.createElement('footer');

    const footerLeft = createSpan('footer-left', 'RSSchool');
    const authorLink = createLink(
      'author-link',
      'https://github.com/sobdima',
      'sobdim',
    );
    const footerRight = createSpan('footer-right', '2025');

    footer.append(footerLeft, authorLink, footerRight);

    return footer;
  }
} */

import { createButton } from '../../components/button';
import { logoutUser } from '../../api/auth';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  ErrorPayload,
  WSResponse,
} from '../../utils/types';

export function createChatPage(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'chat-container';

  const title = document.createElement('h2');
  title.textContent = 'Chat Room';

  const logoutButton = createButton({
    text: 'Logut',
    id: 'logut-button',
  });

  logoutButton.addEventListener('click', async () => {
    /* const login = sessionStorage.getItem('login');
    const password = sessionStorage.getItem('password'); */
    const userSession = JSON.parse(sessionStorage.getItem('user') || '{}');
    const login = userSession.login;
    const password = userSession.password;
    console.log('login, password', login, password);

    if (!login || !password) {
      /* localStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('login');
      sessionStorage.removeItem('password'); */
      sessionStorage.setItem('user', JSON.stringify({
        login: null,
        password: null,
        isLogined: false,
      }));
      window.location.hash = '#login';
      return;
    }

    try {
      const response = await logoutUser(login, password);
      console.log('kaka', response)

      if (response.type === 'USER_LOGOUT') {
        /* localStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('password'); */
        sessionStorage.setItem('user', JSON.stringify({
          login: null,
          password: null,
          isLogined: false,
        }));
        window.location.hash = '#login';
      } else if (response.type === 'ERROR') {
        alert('Logout failed: ' + (response.payload as ErrorPayload).error);
      }
    } catch (err) {
      alert('Connection error');
      console.error(err);
    }
  });

  const messages = document.createElement('div');
  messages.className = 'messages';
  messages.style.border = '1px solid #ccc';
  messages.style.padding = '10px';
  messages.style.height = '300px';
  messages.style.overflowY = 'auto';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type a message...';

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Send';

  // Фиктивная логика отправки
  sendButton.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
      const msg = document.createElement('div');
      msg.textContent = text;
      messages.appendChild(msg);
      input.value = '';
    }
  });

  const inputWrapper = document.createElement('div');
  inputWrapper.style.display = 'flex';
  inputWrapper.style.gap = '0.5rem';
  inputWrapper.style.marginTop = '1rem';
  inputWrapper.append(input, sendButton);

  container.append(title, logoutButton, messages, inputWrapper);
  return container;
}
