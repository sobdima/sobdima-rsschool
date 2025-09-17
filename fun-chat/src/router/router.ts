import { routes } from './routes';
import { isAuthenticated } from '../api/auth';

const app = document.getElementById('app')!;

function render(component: HTMLElement) {
  app.innerHTML = '';
  app.appendChild(component);
}

export function handleRouting() {
  const hash = window.location.hash;
  const authenticated = isAuthenticated();

  // Обработка первичного захода и пустого хэша
  if (!hash || hash === '') {
    if (authenticated) {
      window.location.hash = '#chat';
      return;
    } else {
      window.location.hash = '#login';
      return;
    }
  }

  // Защита страницы логина от авторизованных пользователей
  if (hash === '#login' && authenticated) {
    window.location.hash = '#chat';
    return;
  }

  // Защита страницы чата от неавторизованных пользователей
  if (hash === '#chat' && !authenticated) {
    window.location.hash = '#login';
    return;
  }

  // Поиск и рендер соответствующего маршрута
  const route = routes.find((r) => r.path === hash);

  if (route) {
    const component = route.component();
    render(component);
  } else {
    // Если маршрут не найден, перенаправляем в зависимости от статуса аутентификации
    if (authenticated) {
      window.location.hash = '#chat';
    } else {
      window.location.hash = '#login';
    }
  }
}

export function initRouter() {
  window.addEventListener('hashchange', handleRouting);
  window.addEventListener('load', handleRouting);
}
