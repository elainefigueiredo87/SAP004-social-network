import { handleSignUp } from './data.js';

export const register = () => {
  const signUp = document.createElement('div');

  signUp.className = ('signup-wrapper');

  signUp.innerHTML = `
  <div class='logo'> 
    <img src='./images/wecanlogo.png' alt='logo'>
  </div>
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
    <button class='btn-login' type="submit" id="btnRegister">Cadastrar</button>
  </div>  
    `;

  const btnRegister = signUp.querySelector('#btnRegister');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    handleSignUp();
  });

  return signUp;
};
