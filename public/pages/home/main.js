import { createPost, signOut, deletePost } from './data.js';

export const home = () => {
  const container = document.createElement('div');

  container.className = ('feed-wrapper');

  container.innerHTML = `
  <div id='top-menu-home-wrapper' class='top-menu-wrapper'>
           
      <div id='top-menu-home-icon' class='top-menu-icon' > 
        <a href='javascript:void(0);' id='menu-icon-home' class='icon' >
          <i class='fa fa-bars'></i>
        </a>
      </div>
      <div class='logo-texto'>
      <img class='logo-texto-img' src='./images/logotexto.png'>
      </div>  
      <div id='navigation-wrapper-home' class='navigation-wrapper disable-display'>
        <div class='close-icon-wrapper'>
          <a href='javascript:void(0);' class='icon-x' id='close-menu-icon-home' class='close-menu-icon'>
            <i class='fa fa-times'></i>
          </a>
        </div>
        <nav class='top-menu'> 
          <li>
            <div id='btn-profile' class='menu-hamburger-btn-style'>Perfil</div>
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
      <div id='user-informations' class='user-informations'> 

        <div class='user-role'>Estudante</div>
      </div>
    </div>

    <div class='post-box'>
      <form>
        <textarea id='post' class='post-text' placeholder='Compartilhe aqui o seu conhecimento' type='text' required></textarea>
        <div class='all-buttons'>
          <button id='send-photo' class='btn-style'>Foto</button>
          <button id='send-btn' class='btn-style'>Publicar</button>
        </div>
      </form>
    </div>
    <div id='all-posts'></div>
    `;

  /* -----------MENU HAMBURGER------------- */
  const navigationWrapperHome = container.querySelector('#navigation-wrapper-home');
  const homeHamburgerIcon = container.querySelector('#top-menu-home-icon');

  function toggleMenu() {
    navigationWrapperHome.classList.toggle('disable-display');
    homeHamburgerIcon.classList.toggle('hide-visibility');
  }

  container.querySelector('#menu-icon-home').addEventListener('click', toggleMenu);
  container.querySelector('#close-menu-icon-home').addEventListener('click', toggleMenu);
  /* -------------FIM MENU HAMBUERGER----------- */

  const newPost = (post) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
  <div class = 'posted-box'>
    <div class = 'published-by'>
      <div class = 'by-line'>Publicado por Patrícia Santos </div>
      <button id = 'close-posted-box' class ='close-box' data-id='${post.id}'> X </button>
    </div>
    <div class = 'posted-text' id = 'all-posts'> ${post.text} </div>
    <div class = 'all-buttons'>
      <button id = 'like-btn' class = 'btn-style'> Curtir </button>
      <button id = 'comment-btn' class = 'btn-style'> Comentar </button> 
  </div>
  `;
    return postElement;
  };

  const post = container.querySelector('#post');
  const sendBtn = container.querySelector('#send-btn');
  const allPosts = container.querySelector('#all-posts');
  const btnSignOut = container.querySelector('#sign-out');
  const btnProfile = container.querySelector('#btn-profile');


  const postTemplate = (array) => {
    allPosts.innerHTML = '';
    array.forEach(posts => {
      const postElements = newPost(posts);
      const btnDelete = postElements.querySelector('.close-box');
      btnDelete.addEventListener('click', () => {
        deletePost(posts.id);
      });
      allPosts.appendChild(postElements);
    });
  };

  createPost.readPosts(postTemplate);

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const returnPosts = createPost.insertPosts(post.value);
    returnPosts
      .then(docRef => docRef.id)
      .catch(error => error);
    createPost.readPosts(postTemplate);
    document.getElementById('post').value = '';
  });

  btnSignOut.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
  });

  btnProfile.addEventListener('click', () => {
    window.location.href = '#profile';
  });

  return container;
};


/* <div>
      <button id='btn-sign-out' class='btn-style'>Sair</button>
      </div> */
