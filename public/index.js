import {
  routes,
  routeAllowed,
} from './routes.js';

const main = document.querySelector('#root');

function validateHash(hash) {
  return (hash === '' ? 'login' : hash.replace('#', ''));
}

// renderPage recebe o objeto "user" pronto e o repassa para routeAllowed
const renderPage = (user) => {
  main.innerHTML = '';
  const page = validateHash(window.location.hash);

  // Check se a usuária está permitida acessar pages
  if (!routeAllowed(page, user)) {
    return;
  }
  main.appendChild(routes[page]);
};

const first = () => {
  window.addEventListener('hashchange', () => {
    // renderPage só pode ser invocada quando o objeto "user" já estiver pronto
    firebase.auth().onAuthStateChanged(renderPage);
  });
};

window.addEventListener('load', () => {
  // renderPage só pode ser invocada quando o objeto "user" já estiver pronto
  firebase.auth().onAuthStateChanged(renderPage);
  first();
});
