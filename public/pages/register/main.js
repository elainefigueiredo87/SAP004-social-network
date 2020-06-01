import { handleSignUp } from './data.js';

export const register = () => {

    const signUp = document.createElement('div');

    signUp.innerHTML = `<input type= "text" name= "name" id= "name" placeholder= "Nome Completo" required></input>
    <br>
    <input type= "email" name= "email" id= "email" placeholder= "Email" required></input>
    <br>
    <input type="password" name="password" id="password" placeholder= "Senha" required></input>
    <br>
    <input type="password" name="confirmPassword" id="confirmPassword" placeholder= "Confirme sua senha" required></input>
    <br>
    <button type="submit" id="btnRegister">Cadastrar</button>
    `;

    const btnRegister = signUp.querySelector('#btnRegister');

    btnRegister.addEventListener('click', (event) => {
        event.preventDefault();
        handleSignUp();
    });

    return signUp;
}