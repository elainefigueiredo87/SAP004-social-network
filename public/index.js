import routes from './routes.js';

const main = document.querySelector('#root');

const renderPage = () => {
  main.innerHTML = '';
  const pages = window.location.hash.replace('#', '');
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
