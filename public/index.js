import {
  routes,
  routeAllowed,
} from './routes.js';

let unsubscribe;
const main = document.querySelector('#root');

function validateHash(hash) {
  return (hash === '' ? 'login' : hash.replace('#', ''));
}

const renderPage = (user) => {
  unsubscribe();
  main.innerHTML = '';
  const page = validateHash(window.location.hash);
  if (!routeAllowed(page, user)) {
    return;
  }
  main.appendChild(routes[page]);
};

const first = () => {
  window.addEventListener('hashchange', () => {
    unsubscribe = firebase.auth().onAuthStateChanged(renderPage);
  });
};

window.addEventListener('load', () => {
  unsubscribe = firebase.auth().onAuthStateChanged(renderPage);
  first();
});
