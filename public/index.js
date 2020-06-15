import {
  routes,
  routeAllowed,
} from './routes.js';

const main = document.querySelector('#root');

function validateHash(hash) {
  return (hash === '' ? 'login' : hash.replace('#', ''));
}

const renderPage = () => {
  main.innerHTML = '';
  const pages = validateHash(window.location.hash);

  // Check se a usuária está permitida acessar pages
  if (!routeAllowed(pages)) {
    return;
  }
  main.appendChild(routes[pages]);
};

const first = () => {
  window.addEventListener('hashchange', () => {
    renderPage();
  });
};

window.addEventListener('load', () => {
  renderPage();
  first();
});
