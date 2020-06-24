import {
  loggedUser,
  // updatePhoto,
  signOut,
} from './data.js';

export const profile = () => {
  const containerProfile = document.createElement('div');

  containerProfile.className = ('profile-wrapper');

  containerProfile.innerHTML = `
    <div id='top-menu-profile-wrapper' class='top-menu-wrapper'>
           
      <div id='top-menu-profile-icon' class='top-menu-icon' > 
        <a href='javascript:void(0);' class='icon' id='menu-icon-profile'>
          <i class='fa fa-bars'></i>
        </a>
      </div>
      <div class='logo-texto'>
      <img class='logo-texto-img' src='./images/logotexto.png'>
      </div>  
      <div id='navigation-wrapper-profile' class='navigation-wrapper disable-display'>
        <div class='close-icon-wrapper'>
          <a href='javascript:void(0);' class='icon-x' id='close-menu-icon-profile' class='close-menu-icon'>
            <i class='fa fa-times'></i>
          </a>
        </div>
        <nav class='top-menu'> 
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
      <div id = 'profile-photo' class='profile-img'>
        <img src='https://placekitten.com/100/100'>
        
      </div> 
      <div>
        <div id = 'name-user'></div>
          <button id='edit-photo' class='btn-edit-comment icon-comment-style'><i class='fa fa-pencil'></i></button>
      </div>
    </div>
  `;

  const btnSignOut = containerProfile.querySelector('#sign-out');
  const btnHome = containerProfile.querySelector('#btn-home');

  /* editPhoto.addEventListener('click', () => {
    console.log(updatePhoto());
    profilePhoto.innerHTML = updatePhoto();
  }); */

  function profileInformation(name) {
    containerProfile.querySelector('#name-user').innerHTML = `${name}`;
  }

  loggedUser(profileInformation);

  btnSignOut.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
  });

  btnHome.addEventListener('click', () => {
    window.location.href = '#home';
  });

  /* -----------MENU HAMBURGER------------- */
  const navigationWrapperProfile = containerProfile.querySelector('#navigation-wrapper-profile');
  const profileHamburgerIcon = containerProfile.querySelector('#top-menu-profile-icon');

  function toggleMenu() {
    navigationWrapperProfile.classList.toggle('disable-display');
    profileHamburgerIcon.classList.toggle('hide-visibility');
  }

  containerProfile.querySelector('#menu-icon-profile').addEventListener('click', toggleMenu);
  containerProfile.querySelector('#close-menu-icon-profile').addEventListener('click', toggleMenu);
  /* -------------FIM MENU HAMBURGER----------- */

  return containerProfile;
};
