import { LoginComponent } from './components/login/login';
import { WebSocketService } from './webSocketService';
import { App } from './components/main/main';
import { AuthService } from './components/login/authService';
import './styles/style.css';
import './styles/aboutStyles.css';
import './styles/loginStyles.css';
//import { wsService } from './webSocketService';

console.log('Hello!');

document.addEventListener('DOMContentLoaded', () => {
  const { login, password } = AuthService.getStoredCredentials();

  if (login && password) {
    const app = new App(document.body);
    app.init();
  } else {
    new LoginComponent();
  }
  /* const wsService = new WebSocketService('http://localhost:3000/', login, password);
  wsService.connect(); */
});
