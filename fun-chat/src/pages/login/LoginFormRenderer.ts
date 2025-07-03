export class LoginFormRenderer {
  private sectionElement!: HTMLElement;
  private headingElement!: HTMLElement;
  private formElement!: HTMLElement;
  private loginInput!: HTMLInputElement;
  private passwordInput!: HTMLInputElement;
  private submitButton!: HTMLButtonElement;
  private aboutButton!: HTMLButtonElement;
  private loginErrorElement!: HTMLDivElement;
  private passwordErrorElement!: HTMLDivElement;

  public render(): void {
    this.sectionElement = document.createElement('section');
    this.sectionElement.className = 'login-container';

    this.headingElement = document.createElement('h1');
    this.headingElement.textContent = 'Login';

    this.formElement = document.createElement('form');

    this.loginInput = document.createElement('input');
    this.loginInput.className = 'input login-input';
    this.loginInput.type = 'text';
    this.loginInput.placeholder = 'Enter your name';
    this.loginInput.name = 'login';
    this.loginInput.required = true;

    this.passwordInput = document.createElement('input');
    this.passwordInput.className = 'input password-input';
    this.passwordInput.type = 'password';
    this.passwordInput.placeholder = 'Enter password';
    this.passwordInput.name = 'password';
    this.passwordInput.required = true;

    this.submitButton = document.createElement('button');
    this.submitButton.textContent = 'Enter the chat';
    this.submitButton.type = 'submit';

    this.aboutButton = document.createElement('button');
    this.aboutButton.textContent = 'About';
    this.aboutButton.type = 'button';

    this.loginErrorElement = document.createElement('div');
    this.loginErrorElement.className = 'error';
    this.passwordErrorElement = document.createElement('div');
    this.passwordErrorElement.className = 'error';

    this.formElement.append(
      this.loginInput,
      this.loginErrorElement,
      this.passwordInput,
      this.passwordErrorElement,
      this.submitButton,
      this.aboutButton,
    );
    this.sectionElement.append(this.headingElement, this.formElement);

    if (document.body) {
      document.body.appendChild(this.sectionElement);
    } else {
      console.error('<body> tag has not found.');
    }

    this.loginInput.addEventListener('input', () => this._validateLoginInput());
    this.passwordInput.addEventListener('input', () =>
      this._validatePasswordInput(),
    );
  }

  private _validateLoginInput(): boolean {
    let isValid = true;

    this.loginErrorElement.textContent = '';

    if (this.loginInput.value.trim().length < 6) {
      this.loginErrorElement.textContent =
        'Username must be longer than 5 characters.';
      isValid = false;
    }

    return isValid;
  }

  private _validatePasswordInput(): boolean {
    let isValid = true;

    this.passwordErrorElement.textContent = '';

    if (this.passwordInput.value.trim().length < 6) {
      this.passwordErrorElement.textContent =
        'Password must be longer than 5 characters.';
      isValid = false;
    }

    return isValid;
  }

  private _handleFormSubmit(event: SubmitEvent): void {
    event.preventDefault();

    if (this._validateLoginInput() && this._validatePasswordInput()) {
      const loginValue = this.loginInput.value.trim();
      const passwordValue = this.passwordInput.value.trim();

      // Здесь могла бы быть логика отправки данных на сервер
      // После успешной отправки можно, например, очистить форму:
      // this.formElement.reset();
      // this._validateInputs(); // Очистит сообщения об ошибках, если они были (хотя их не должно быть)
    } else {
      console.log('Validation error. The form has not sent.');
    }
  }
}
