import routes from './routes.js';

const main = document.querySelector('#root');

const validateHash = (hash) => (hash === '' ? 'login' : hash.replace('#', ''));

const renderPage = () => {
  main.innerHTML = '';
  const pages = validateHash(window.location.hash);
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
