import { createLoginForm } from '../pages/login/login';
import { Route } from '../utils/types';
import { createChatPage } from '../pages/main/main';


export const routes: Route[] = [
  {
    path: '#login',
    component: createLoginForm,
  },
  {
    path: '#about',
    component: () => {
      const about = document.createElement('div');
      about.innerHTML = '<h2>About</h2><p>This is a simple chat app.</p>';
      return about;
    },
  },
  {
    path: '#chat',
    component: createChatPage,
  },
  {
    path: '',
    component: createLoginForm,
  },
];
