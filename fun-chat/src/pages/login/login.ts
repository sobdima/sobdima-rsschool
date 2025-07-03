import { createInput } from '../../components/input';
import { createButton } from '../../components/button';
//import { sendRequest } from '../../api/ws';
import { loginUser } from '../../api/auth';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  ErrorPayload,
  WSResponse,
} from '../../utils/types';

export function createLoginForm(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'login-container';

  const title = document.createElement('h2');
  title.textContent = 'LOGIN';

  const form = document.createElement('form');

  // Username input
  const usernameInput = createInput({
    type: 'text',
    id: 'user-name',
    placeholder: 'Username',
    required: true,
  });

  // Password input
  const passwordInput = createInput({
    type: 'password',
    id: 'user-password',
    placeholder: 'Password',
    required: true,
  });

  const errorMessage = document.createElement('div');

  // Submit button
  const enterButton = createButton({
    text: 'Enter the chat',
    type: 'submit',
    id: 'submit-button',
  });

  // About button
  const aboutButton = createButton({
    text: 'About',
    type: 'button',
    id: 'about-button',
    onClick: () => {
      // TODO: handle About
      window.location.hash = '#about';
    },
  });

  // Form submit handler
  form.addEventListener('submit', (e) =>
    handleLoginSubmit(
      e,
      usernameInput as HTMLInputElement,
      passwordInput as HTMLInputElement,
      errorMessage
    )
  );

  const buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'login-buttons-wrap';
  buttonWrapper.append(enterButton, aboutButton);

  form.append(usernameInput, passwordInput, buttonWrapper, errorMessage);
  container.append(title, form);
  window.location.hash = '#login';

  return container;
}

async function handleLoginSubmit(
  e: Event,
  usernameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
  errorMessage: HTMLElement
) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  console.log('Logging in with:', { username, password });
  errorMessage.textContent = '';

  try {
    const response = await loginUser(username, password);
    const userSession = {
      login: username,
      password: password,
      isLogined: true,
    };

    if (response.type === 'USER_LOGIN') {
      const data = response.payload as LoginSuccessPayload;
      if (data.user.isLogined) {
        /* localStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('login', username);
        sessionStorage.setItem('password', password); */
        sessionStorage.setItem('user', JSON.stringify(userSession));
        window.location.hash = '#chat';
      } else {
        errorMessage.textContent = 'Login failed';
      }
    } else if (response.type === 'ERROR') {
      const err = response.payload as ErrorPayload;
      errorMessage.textContent = err.error;
    }
  } catch (err) {
    errorMessage.textContent = 'Connection error';
    console.error(err);
  }
}