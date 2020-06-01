// Este é o ponto de entrada de sua aplicação
<<<<<<< HEAD
import { home } from './pages/home/main.js';
//import  login  from './pages/login/main.js';
//import { register } from './pages/register/main.js';
//import { profile } from '.pages/profile/main.js';
=======
//import { home } from './pages/home/main.js';
import { appStart } from './pages/login/main.js';
import { register } from './pages/register/main.js';
//import { profile } from '.pages/profile/main.js';
//import toggleSignIn from './functions/index.js';
>>>>>>> 39ed9c849925e19d5cad0f91546c496d3b7457fa

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
            default:
                main.appendChild(appStart());
        }
    })
}
window.addEventListener("load", () => {
    main.appendChild(appStart());
    first();
})