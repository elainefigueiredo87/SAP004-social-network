import {
  loggedUser,
  signOut,
} from './data.js';

export const profile = () => {
  const containerProfile = document.createElement('div');

  containerProfile.className = ('profile-wrapper');

  containerProfile.innerHTML = `
    <header id='top-menu-profile-wrapper' class='top-menu-wrapper'>
      <div id='top-menu-profile-icon' class='top-menu-icon' > 
        <a href='javascript:void(0);' class='icon' id='menu-icon-profile'>
          <i class='fa fa-bars'></i>
        </a>
      </div>
      <figure class='logo-texto'>
        <img class='logo-texto-img' src='./images/logotexto.png'>
      </figure>  
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
    </header>
    <div class = 'profile-content-wrapper'>
      <div class='profile-box'>
        <figure id = 'profile-photo' class='profile-img'>
          <img src='./images/code-girls.png'>
        </figure> 
          <div class='name-wrapper'>
            <div id='name-user' class='name-user'></div>
          </div>   
      </div>
    </div>
    <main class='text-wrapper'>
      <div class='text-content'>
        <h3 class='title'>
        Por que precisamos de uma rede para mulheres em tecnologia
        </h3>
        <p>As mulheres do setor de tecnologia trouxeram enormes mudanças sociais e estão fazendo a diferença no mundo!</p>
        <p>Mostre seu apoio às desenvolvedoras:</p>
        <ul>
          <li>Ajude a inserir mulheres na área de tecnologia indicando programas como a 
            <a href='https://www.laboratoria.la/br'>Laboratoria</a>,
            <a href='https://reprograma.com.br/'>Reprograma</a>,
            <a href='https://www.programaria.org/'>PrograMaria</a> e muitas outras iniciativas incríveis;</li>
          <li>Incentive-as a enviar propostas de palestras e participe também desses eventos;</li>
          <li>Peça a uma colega que compartilhe mais sobre um projeto em que está trabalhando e sugira sua ajuda;</li>
          <li>Fale sobre suas experiências e crie o mesmo ambiente para que outras façam o mesmo.</li>
        </ul>
      </div>
    </main>
  `;

  const btnSignOut = containerProfile.querySelector('#sign-out');
  const btnHome = containerProfile.querySelector('#btn-home');

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

  const navigationWrapperProfile = containerProfile.querySelector('#navigation-wrapper-profile');
  const profileHamburgerIcon = containerProfile.querySelector('#top-menu-profile-icon');

  function toggleMenu() {
    navigationWrapperProfile.classList.toggle('disable-display');
    profileHamburgerIcon.classList.toggle('hide-visibility');
  }

  containerProfile.querySelector('#menu-icon-profile').addEventListener('click', toggleMenu);
  containerProfile.querySelector('#close-menu-icon-profile').addEventListener('click', toggleMenu);

  return containerProfile;
};
