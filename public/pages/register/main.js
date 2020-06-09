import { createAccount } from './data.js';

export const register = () => {
  const signUp = document.createElement('div');

  signUp.className = ('signup-wrapper');

  signUp.innerHTML = `
  <div class='logo'> 
    <img src='./images/wecanlogo.png' alt='logo'>
  </div>
  <div class='sign-box'> 
    <div>
      <input class='sign-login' type= "text" name= "name" id= "name" placeholder= "Nome Completo" required></input>
    </div>
    <div>  
      <input class='sign-login' type= "email" name= "email" id= "email" placeholder= "Email" required></input>
    </div>
    <div>
      <input class='sign-login' type="password" name="password" id="password" placeholder= "Senha" required></input>
    </div>
    <div>  
      <input class='sign-login' type="password" name="confirmPassword" id="confirmPassword" placeholder= "Confirme sua senha" required></input>
    </div>
    <div class='message-error' id='message-error'></div>
    <div> 
      <button class='btn-register' type="submit" id="btnRegister">Cadastrar</button>
    </div>  
    <div class='return-login'>
        Já tem uma conta? <a href='/#login'>Faça login.</a>
      </div>
  </div>
  `;

  const btnRegister = signUp.querySelector('#btnRegister');

  btnRegister.addEventListener('click', () => {
    const email = signUp.querySelector('#email').value;
    const password = signUp.querySelector('#password').value;
    const registerAuth = createAccount.signRegister(email, password);
    registerAuth
      .then(() => {
        window.location.href = '#login';
      })
      .catch((error) => {
        let errorMessage = error.message;
        if (error.code === 'auth/weak-password') {
          errorMessage = 'Senha deve ter no mínimo 6 caracteres';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Formato de e-mail inválido';
        }
        const errorEle = signUp.querySelector('#message-error');
        errorEle.innerHTML = errorMessage;
      });
  });

  return signUp;
};
