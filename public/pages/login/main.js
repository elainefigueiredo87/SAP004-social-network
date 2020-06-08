import { /* logIn */ login /* errors */ } from './data.js';

export const appStart = () => {
  const menuLogin = document.createElement('div');

  menuLogin.className = ('login-wrapper');

  menuLogin.innerHTML = `
    <div class='logo'> 
      <img src='./images/wecanlogo.png' alt='logo'>
    </div>
    <div class='sign-box'> 
    <div class='welcome'>Bem vinda Dev!</div>
    <div>
      <input class='sign-login' type= 'email' name= 'email' id= 'email' placeholder= 'Email' required></input>
    </div>
    <div>
      <input class='sign-login' type='password' name='password' id='password' placeholder= 'Senha' required></input>
    </div>
    <div class='message-error' id='message-error'></div>
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

  const btnLogin = menuLogin.querySelector('#btn-login');

  btnLogin.addEventListener('click', () => {
    const email = menuLogin.querySelector('#email').value;
    const password = menuLogin.querySelector('#password').value;
    const loginAuth = login.signIn(email, password);
    loginAuth
      .then(() => {
        window.location.href = '#home';
      })
      .catch((error) => {
        let errorMessage = error.message;
        if (error.code === 'auth/wrong-password') {
          errorMessage = 'Credenciais inválidas';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Formato do email inválido';
        }
        const errorElement = menuLogin.querySelector('#message-error');
        errorElement.innerHTML = errorMessage;
      });
  });

  return menuLogin;
};
