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

  //Handling the initial enter and empty hash
  if (!hash || hash === '') {
    if (authenticated) {
      window.location.hash = '#chat';
      return;
    } else {
      window.location.hash = '#login';
      return;
    }
  }

  //Protecting the '/login' page from authorized users
  if (hash === '#login' && authenticated) {
    window.location.hash = '#chat';
    return;
  }

  //Protecting '/chat' page from unauthorized users
  if (hash === '#chat' && !authenticated) {
    window.location.hash = '#login';
    return;
  }

  //Search and render the corresponding route
  const route = routes.find((r) => r.path === hash);

  if (route) {
    const component = route.component();
    render(component);
  } else {
    //If the route is not found
    if (authenticated) {
      window.location.hash = '#chat';
    } else {
      window.location.hash = '#login';
    }
  }
}

export function initRouter() {
  const handleHashChange = () => {
    handleRouting();
  };

  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('load', handleHashChange);
}
