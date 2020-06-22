import {
  routes,
  routeAllowed,
} from './routes.js';

// Prepara uma variável que armazena a função unsubscribe de onAuthStateChanged
let unsubscribe;
const main = document.querySelector('#root');

function validateHash(hash) {
  return (hash === '' ? 'login' : hash.replace('#', ''));
}

// renderPage recebe o objeto "user" pronto e o repassa para routeAllowed
const renderPage = (user) => {
  // Desativa o observador que chamou essa função agora.
  // Isso garante que cada 'hashchange' só pode acionar essa função uma vez.
  unsubscribe();
  main.innerHTML = '';
  const page = validateHash(window.location.hash);

  // Check se a usuária está permitida acessar pages
  if (!routeAllowed(page, user)) {
    return;
  }
  main.appendChild(routes[page]);
};


// Precisamos desativar o observador de onAuthStateChanged.

const first = () => {
  window.addEventListener('hashchange', () => {
    // renderPage só pode ser invocada quando o objeto "user" já estiver pronto
    unsubscribe = firebase.auth().onAuthStateChanged(renderPage);
  });
};

window.addEventListener('load', () => {
  // renderPage só pode ser invocada quando o objeto "user" já estiver pronto
  unsubscribe = firebase.auth().onAuthStateChanged(renderPage);
  first();
});
