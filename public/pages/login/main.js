import { toggleSignIn } from './data.js';

export const appStart = () => {
  const menuLogin = document.createElement('div');

  menuLogin.className = ('login-wrapper');

  menuLogin.innerHTML = `
    <div class='logo'> 
      <img src='./images/wecanlogo.png' alt='logo'>
    </div>
    <div class='welcome'>Bem vinda Dev!</div>
    <div>
      <input class='sign-login' type= 'email' name= 'email' id= 'email' placeholder= 'Email' required></input>
    </div>
    <div class='message-error' id='message-error-email'></div>
    <div>
      <input class='sign-login' type='password' name='password' id='password' placeholder= 'Senha' required></input>
    </div>
    <div class='message-error' id='message-error-password'></div>
    <div>
      <button class='btn-login' type='submit' name='btn-login' id='btn-login'>Entrar</button>
    </div>
    <div class='sign-google'>Ou entre com...</div>
   <div class='icon-google'>
      <img src='./images/logo-google.png'>
   </div>
    <div class='create-account'>
      Quer entrar para a rede? <a href='/#register'>Cadastre-se</a>
    </div>
    `;

  // const email = menuLogin.querySelector('#email');
  // const password = menuLogin.querySelector('#password');
  const btnLogin = menuLogin.querySelector('#btn-login');

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    toggleSignIn();
  });

  return menuLogin;
};
