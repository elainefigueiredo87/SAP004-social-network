export const profile = () => {
  const containerProfile = document.createElement('div');

  containerProfile.className = ('profile-wrapper');

  containerProfile.innerHTML = `
    <div id='top-menu-profile-wrapper' class='top-menu-profile-wrapper-class'>
     
      
      <div id='top-menu-profile-icon' class='top-menu-profile-icon-class' > 
        <a href='javascript:void(0);' class='icon' id='menu-icon-profile'>
          <i class='fa fa-bars'></i>
        </a>
      </div>
      <div class='logo-texto'>
      <img class='logo-texto-img' src='./images/logotexto.png'>
      </div>  
      <div id='navigation-wrapper-profile' class='navigation-wrapper-profile-class disable-display'>
        <div class='close-profile-icon-wrapper-class'>
          <a href='javascript:void(0);' class='icon-x' id='close-menu-icon-profile' class='close-menu-icon-profile-class'>
            <i class='fa fa-times'></i>
          </a>
        </div>
        <nav class='top-menu-profile-class'> 
          <li>
            <div id='btn-home' class='menu-hamburger-btn-style'>Home</div>
          </li>
          <li>
            <div id='sign-out' class='menu-hamburger-btn-style'>Sair</div>
          </li>
        </nav>
      </div>  
      </div>
    </div>
    <div class='profile-box'>
      <div class='profile-img'>
        <img src='https://placekitten.com/100/100'>
      </div> 
      <div>
        Ana Maria Silva
        <div class='user-role'>Estudante</div>
     </div>
    </div>
    
    <div class='post-box'>
      <form>
    
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
      <div class='posted-text'> CSS é muuuuuito legal! Sempre dá certo! Risos
      <p> <p>
      </div>  
      <div class ='all-buttons'>
        <button id='like-btn' class='btn-style'>Curtir</button>
        <button id='comment-btn' class='btn-style'>Comentar</button>    
      </div>
    </div>  
  `;

  /* -----------MENU HAMBURGER------------- */
  const navigationWrapperProfile = containerProfile.querySelector('#navigation-wrapper-profile');
  const profileHamburgerIcon = containerProfile.querySelector('#top-menu-profile-icon');

  function toggleMenu() {
    navigationWrapperProfile.classList.toggle('disable-display');
    profileHamburgerIcon.classList.toggle('hide-visibility');
  }

  containerProfile.querySelector('#menu-icon-profile').addEventListener('click', toggleMenu);
  containerProfile.querySelector('#close-menu-icon-profile').addEventListener('click', toggleMenu);
  /* -------------FIM MENU HAMBUERGER----------- */

  const btnSignOut = containerProfile.querySelector('#sign-out');
  const btnHome = containerProfile.querySelector('#btn-home');

  btnSignOut.addEventListener('click', () => {
    // container.innerHTML = templateProfile;
  });
  btnHome.addEventListener('click', () => {
    window.location.href = '#home';
  });
  return containerProfile;
};
