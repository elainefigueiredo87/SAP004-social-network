import { home } from './pages/home/main.js';
import { appStart } from './pages/login/main.js';
import { register } from './pages/register/main.js';
import { profile } from './pages/profile/main.js';

export default {
  home: home(),
  login: appStart(),
  register: register(),
  profile: profile(),
};
