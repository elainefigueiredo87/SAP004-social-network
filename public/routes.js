import { home } from './pages/home/main.js';
import { appStart } from './pages/login/main.js';
import { register } from './pages/register/main.js';
import { profile } from './pages/profile/main.js';

export const routes = {
  home: home(),
  login: appStart(),
  register: register(),
  profile: profile(),
};

export const routeAllowed = (route) => {
  // Lista de rotas que podem ser acessadas sem login
  const publicRoutes = [
    'register',
    'login',
  ];

  let isAllowed = true;

  const user = firebase.auth().currentUser;
  // A usuária está logada?
  if (user) {
    // Check se a usuária logada tem o email verificado
    if (!user.emailVerified) {
      isAllowed = false;
      alert('Verifique o seu email antes de fazer login');
      firebase.auth().signOut()
        .then(() => {
          window.location.href = '#login';
        });
    }
    // Usuária está logada, então rotas públicas não estão permitidas
    if (publicRoutes.includes(route)) {
      // Usuária logada está tentando acessar uma rota pública
      isAllowed = false;
      // Mande para a página home
      window.location = '#home';
    }
  } // else if (!publicRoutes.includes(route)) { // User não logada, só rotas públicas são permitidas
  // Usuária não logada está tentando acessar uma rota privada
  // isAllowed = false;
  // Peça para fazer login.
  // window.location = '#login';
  // }
  return isAllowed;
};
