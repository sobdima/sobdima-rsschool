//новый код, после сабмита, 6 мая 2025
/* import { LoginFormRenderer } from './pages/login/LoginFormRenderer';
import '../global.css';
import './pages/about/about.css';
import './pages/login/login.css';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = new LoginFormRenderer();
  loginForm.render();
}); */


import { initRouter } from './router/router';
import { connect } from './api/ws';

connect('ws://localhost:4000/');

initRouter();
