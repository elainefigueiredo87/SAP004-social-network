import { initApp } from '../../components.js';

export const profile = () => {
  const containerProfile = document.createElement('div');

  containerProfile.className = ('profile-wrapper');

  containerProfile.innerHTML = `
    <div class='profile-box'>
      <div class='profile-img'>
        <img src='https://placekitten.com/100/100'>
      </div> 

      <div class='user-informations'>  
        Ana Maria Silva
        <div class='user-role'>Estudante</div>
        <button id='sign-out' class='btn-out'>Sair</button>
     </div>
    </div>
    
    <div class='post-box'>
      <form>
      <label> Publicações </label>
        <textarea id='post' class='post-text' placeholder='No que você está pensando?' type='text' required></textarea>
        <div class='all-buttons'>
          <button id='send-photo' class='btn-style'>Foto</button>
          <button id='send-btn' class='btn-style'>Publicar</button>
        </div>
      </form>
    </div>

    <div class='posted-box'>
      <div class='published-by'>
        <div class='by-line'>
          Suas postagens anteriores
        </div>
        <div id='close-posted-box' class='close-box'>X</div>
      </div>
      <div class='posted-text'>
      <p> <p>
      </div>  
      <div class ='all-buttons'>
        <button id='like-btn' class='btn-style'>Curtir</button>
        <button id='comment-btn' class='btn-style'>Comentar</button>    
      </div>
    </div>  
  `;

  initApp();

  const btnSignOut = containerProfile.querySelector('#sign-out');

  btnSignOut.addEventListener('click', () => {
    // container.innerHTML = templateProfile;
  });
  return containerProfile;
};
