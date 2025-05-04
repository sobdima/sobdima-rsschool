import { createInput, createButton } from '../helpers';
import { WebSocketService } from '../../webSocketService';
import { App } from '../main/main';
import { AuthService } from '../login/authService';

export class LoginComponent {
  private container: HTMLElement;
  private submitButton: HTMLButtonElement;
  private nameInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private nameError: HTMLElement;
  private passwordError: HTMLElement;
  private wsService: WebSocketService | null = null;

  constructor(parent: HTMLElement = document.body) {
    this.container = document.createElement('section');
    this.container.className = 'login-container';

    const title = document.createElement('h1');
    title.textContent = 'Login';

    const form = document.createElement('form');

    this.nameInput = createInput({
      type: 'text',
      placeholder: 'Enter your name',
      className: 'input login-input',
      id: 'name',
    });

    this.passwordInput = createInput({
      type: 'password',
      placeholder: 'Enter password',
      className: 'input password-input',
      id: 'password',
    });

    this.nameError = document.createElement('div');
    this.nameError.className = 'error';

    this.passwordError = document.createElement('div');
    this.passwordError.className = 'error';

    this.submitButton = createButton({
      text: 'Enter the chat',
      type: 'submit',
    });
    this.submitButton.disabled = true;

    const aboutButton = createButton({
      text: 'About',
      type: 'button',
      id: 'about-btn',
    });

    form.append(
      this.nameInput,
      this.nameError,
      this.passwordInput,
      this.passwordError,
      this.submitButton,
      aboutButton,
    );
    this.container.append(title, form);
    parent.appendChild(this.container);

    this.addEventListeners();
  }

  private addEventListeners() {
    const form = this.container.querySelector('form');
    const aboutBtn = this.container.querySelector('#about-btn');

    this.nameInput.addEventListener('input', () => this.validateForm());
    this.passwordInput.addEventListener('input', () => this.validateForm());

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLogin();
      this.nameInput.value = '';
      this.passwordInput.value = '';
    });

    aboutBtn?.addEventListener('click', () => {
      console.log('About button clicked');
    });
  }

  private validateForm() {
    const nameValid = this.validateName();
    const passwordValid = this.validatePassword();

    this.submitButton.disabled = !(nameValid && passwordValid);

    if (!this.nameInput.value) {
      this.nameError.textContent = '';
    }
    if (!this.passwordInput.value) {
      this.passwordError.textContent = '';
    }
  }

  private validateName(): boolean {
    const name = this.nameInput.value.trim();
    if (name.length <= 4) {
      this.nameError.textContent = 'Name must be longer than 4 characters.';
      return false;
    } else {
      this.nameError.textContent = '';
      return true;
    }
  }

  private validatePassword(): boolean {
    const password = this.passwordInput.value.trim();
    const hasNumber = /\d/.test(password);

    if (password.length <= 4 || !hasNumber) {
      this.passwordError.textContent =
        'Password must be longer than 4 characters and contain at least 1 number.';
      return false;
    } else {
      this.passwordError.textContent = '';
      return true;
    }
  }

  private handleLogin(): void {
    const login = (document.getElementById('name') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    if (this.validateName() && this.validatePassword()) {
      this.wsService = new WebSocketService(
        'ws://localhost:4000/ws',
        login, password
      );

      AuthService.saveCredentials(login, password);

      this.startApp();
    } else {
      this.showAuthError('Invalid login or password');
    }
  }

  private startApp() {
    this.container.remove();

    const app = new App(document.body);
    app.init();
  }

  private showAuthError(message: string) {
    alert(message);
  }
}
