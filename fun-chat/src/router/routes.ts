import { createLoginForm } from '../pages/login/login';
import { Route } from '../utils/types';
import { createChatPage } from '../pages/main/main';
import { createAboutPage } from '../pages/about/about';


export const routes: Route[] = [
  {
    path: '#login',
    component: createLoginForm,
  },
  {
    path: '#about',
    component: createAboutPage,
  },
  {
    path: '#chat',
    component: createChatPage,
  }
];
