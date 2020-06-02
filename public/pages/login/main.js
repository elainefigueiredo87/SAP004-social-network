import { toggleSignIn } from './data.js';

export const appStart = () => {
  const menuLogin = document.createElement('div');

  menuLogin.innerHTML = `<input type= 'email' name= 'email' id= 'email' placeholder= 'Email' required></input>
    <br>
    <input type='password' name='password' id='password' placeholder= 'Senha' required></input>
    <br>
    <button type='submit' name='btnLogin' id='btnLogin'>Entrar</button>
    <br>
    <p>Entrar usando uma conta do google</p>
    <br>
    <a href='/#register'>Criar uma conta</a>
    `;

  // const email = menuLogin.querySelector('#email');
  // const password = menuLogin.querySelector('#password');
  const btnLogin = menuLogin.querySelector('#btnLogin');

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    toggleSignIn();
  });

  return menuLogin;
};
