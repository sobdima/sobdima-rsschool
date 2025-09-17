import { createInput } from '../../components/input';
import { createButton } from '../../components/button';
import { createDiv } from '../../components/div';
import { loginUser } from '../../api/auth';
import { validateLoginForm } from '../../utils/validations';
import './login.css';
import { handleRouting } from '../../router/router';

export function createLoginForm(): HTMLElement {
  const container = createDiv('login-container');
  const title = document.createElement('h2');
  title.textContent = 'LOGIN';

  const form = document.createElement('form');

  const usernameInput = createInput({
    type: 'text',
    id: 'user-name',
    placeholder: 'Username',
    required: true,
  });

  const passwordInput = createInput({
    type: 'password',
    id: 'user-password',
    placeholder: 'Password',
    required: true,
  });

  // div for displaying username and password validation errors
  const usernameError = createDiv('validation-error');
  const passwordError = createDiv('validation-error');

  const errorMessage = document.createElement('div');
  errorMessage.className = 'general-error';

  const enterButton = createButton({
    text: 'Enter the chat',
    type: 'submit',
    id: 'submit-button',
  });

  const aboutButton = createButton({
    text: 'About',
    type: 'button',
    id: 'about-button',
    onClick: () => {
      window.location.hash = '#about';
    },
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'login-buttons-wrap';
  buttonWrapper.append(enterButton, aboutButton);

  form.append(usernameInput, usernameError, passwordInput, passwordError, buttonWrapper, errorMessage);
  container.append(title, form);


  usernameInput.addEventListener('input', () => {
    validateLoginForm(
      usernameInput as HTMLInputElement,
      passwordInput as HTMLInputElement,
      usernameError,
      passwordError,
      enterButton as HTMLButtonElement
    );
  });

  passwordInput.addEventListener('input', () => {
    validateLoginForm(
      usernameInput as HTMLInputElement,
      passwordInput as HTMLInputElement,
      usernameError,
      passwordError,
      enterButton as HTMLButtonElement
    );
  });

  (enterButton as HTMLButtonElement).disabled = true;

  form.addEventListener('submit', (event) =>
    handleLoginSubmit(
      event,
      usernameInput as HTMLInputElement,
      passwordInput as HTMLInputElement,
      errorMessage
    )
  );

  return container;
}

async function handleLoginSubmit(
  event: Event,
  usernameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  errorMessage: HTMLElement
) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  errorMessage.textContent = "";
  errorMessage.style.display = "none";

  try {
    const response = await loginUser(username, password);
    console.log(response);

    if (response.type === 'USER_LOGIN') {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.hash = "#chat";
      handleRouting();
    }


  } catch (error) {
    console.log('Login error: ', error);

    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    }

    errorMessage.textContent = `Sorry, ${message}`;
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
  }
}