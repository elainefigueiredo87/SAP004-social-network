// Este é o ponto de entrada de sua aplicação
import { home } from './pages/home/main.js';
//import  login  from './pages/login/main.js';
//import { register } from './pages/register/main.js';
//import { profile } from '.pages/profile/main.js';

document.querySelector('#root').appendChild(home());
