import { home } from './pages/home/main.js';
import { appStart } from './pages/login/main.js';
import { register } from './pages/register/main.js';
import { profile } from './pages/profile/main.js';

export const routes = {};
firebase.auth().onAuthStateChanged(() => {
  routes.home = home();
  routes.login = appStart();
  routes.register = register();
  routes.profile = profile();
});

export const routeAllowed = (route, user) => {
  const publicRoutes = [
    'register',
    'login',
  ];

  let isAllowed = false;

  if (user) {
    if (!user.emailVerified) {
      growl({
        text: 'Verifique o seu email antes de fazer login', type: 'error', fadeAway: true, fadeAwayTimeout: 3000,
      });
      firebase.auth().signOut()
        .then(() => {
          window.location.href = '#login';
        })
        .catch(() => {
          growl({
            text: 'Verifique o seu email antes de fazer login', type: 'error', fadeAway: true, fadeAwayTimeout: 3000,
          });
        });
      return isAllowed;
    }
    if (!publicRoutes.includes(route)) {
      isAllowed = true;
    } else {
      window.location.href = '#home';
    }
  } else if (publicRoutes.includes(route)) {
    isAllowed = true;
  } else {
    window.location.href = '#login';
  }
  return isAllowed;
};
