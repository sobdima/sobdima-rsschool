import {
  createDiv,
  createButton,
  createInput,
  createListItem,
  createParagraph,
  createSpan,
  createLink,
} from '../helpers';
import { AuthService } from '../login/authService';

export class App {
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
}
