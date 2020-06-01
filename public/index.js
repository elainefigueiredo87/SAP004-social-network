// Este é o ponto de entrada de sua aplicação

import { home } from './pages/home/main.js';
import { appStart } from './pages/login/main.js';
import { register } from './pages/register/main.js';
import { profile } from './pages/profile/main.js';
//import { profile } from '.pages/profile/main.js';
//import toggleSignIn from './functions/index.js';

//document.querySelector('#root').appendChild(home());

const main = document.querySelector("#root");

const first = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case "#login":
                main.appendChild(appStart());
                break;
            case "#register":
                main.appendChild(register());
                break;
            case "#home":
                main.appendChild(home());
                break;
            case "#profile":
                main.appendChild(profile());
                break;
            default:
                main.appendChild(appStart());
        }
    })
}
window.addEventListener("load", () => {
    main.appendChild(appStart());
    first();
})