import {
  home,
} from './pages/home/main.js';
import {
  appStart,
} from './pages/login/main.js';
import {
  register,
} from './pages/register/main.js';
import {
  profile,
} from './pages/profile/main.js';


// If the users logIn or logOut, re-render all the pages
/* export let routes;
firebase.auth().onAuthStateChanged(() => {
  routes = {
    home: home(),
    login: appStart(),
    register: register(),
    profile: profile(),
  };
}); */


// Se a usuária fizer login ou logout, re-render todas as páginas
export const routes = {};
firebase.auth().onAuthStateChanged(() => {
  routes.home = home();
  routes.login = appStart();
  routes.register = register();
  routes.profile = profile();
});

// routeAllowed já recebe o objeto "user" pronto e não precisa se preocupar em obtê-lo com o firebase
export const routeAllowed = (route, user) => {
  // Lista de rotas que podem ser acessadas sem login
  const publicRoutes = [
    'register',
    'login',
  ];

  let isAllowed = false;

  // A usuária está logada?
  if (user) {
    // Check se a usuária logada tem o email verificado
    if (!user.emailVerified) {
      alert('Verifique o seu email antes de fazer login');
      firebase.auth().signOut()
        .then(() => {
          window.location.href = '#login';
        });
      return isAllowed;
    }
    // Usuária está logada, então só rotas privadas são permitidas
    if (!publicRoutes.includes(route)) {
      isAllowed = true;
    } else {
      // Usuária logada está tentando acessar uma rota pública
      // Mande-a para a home
      window.location.href = '#home';
    }
  } else if (publicRoutes.includes(route)) { // User não logada, só rotas públicas são permitidas
    // Usuária não logada está tentando acessar uma rota pública
    isAllowed = true;
  } else {
    // Usuária não logada está tentando acessar uma rota privada
    // Peça para fazer login.
    window.location.href = '#login';
  }
  return isAllowed;
};
