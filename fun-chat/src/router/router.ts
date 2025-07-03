import { routes } from './routes';
import { isAuthenticated } from '../api/auth';

const app = document.getElementById('app')!;

function render(component: HTMLElement) {
  app.innerHTML = '';
  app.appendChild(component);
}

export function handleRouting() {
  const hash = window.location.hash;

  if (hash === '#login' && isAuthenticated()) {
    window.location.hash = '#chat';
    return;
  }

  const route = routes.find((r) => r.path === hash) || routes.find((r) => r.path === '');

  if (route) {
    const component = route.component();
    render(component);
  }
}

export function initRouter() {
  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('load', handleRouting);
}
