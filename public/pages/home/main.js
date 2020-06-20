import {
  loggedUser,
  createPost,
  // likeCollection,
  signOut,
  deletePost,
  updateLike,
} from './data.js';

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
    <div id='profile-box' class='profile-box'>
      <div class='profile-img'>
        <img src='https://placekitten.com/100/100'>
      </div>
      <div class= 'user-informations'>
        <div id='name-information' class='name-information'></div>
        <div id='user-role' class='user-role'>Estudante</div>
      </div>
    </div>
    <div class='post-box'>
      <form id='post-send-form'>
        <textarea id='post' class='post-text' placeholder='Compartilhe aqui o seu conhecimento' type='text' required></textarea>
        <div class='all-buttons'>
          <div class='privacy-wrapper' id='privacy-options'>
            <div class='public-option'>
              <i class='fa fa-lock icon-style' ></i>
              <input type='radio' name='privacy' id='private-option' class='privacy-options' value="private">
            </div>
            <div class='private-option'>
              <i class='fa fa-globe icon-style'></i>
              <input type='radio' name='privacy' id='public-option' class='privacy-options' checked="true" value="public">
            </div>
          </div>
          <button id='send-btn' class='btn-style'>Publicar</button>
        </div>
      </form>
    </div>
    <div id='all-posts'></div>
    `;

  const newPost = (post) => {
    const postElement = document.createElement('div');

    const date = new Date(post.time.seconds * 1000);

    // imprimir simbolo no post
    let privacySymbol = '';
    if (typeof post.public !== 'undefined') {
      if (post.public) {
        privacySymbol = "<i class='fa fa-globe icon-style' ></i>";
      } else {
        privacySymbol = "<i class='fa fa-lock icon-style' ></i>";
      }
    }

    postElement.innerHTML = `
        <div class='posted-box'>
          <div class='published-by'>
            ${privacySymbol}
            <div class='by-line'>Publicado por ${post.user} em ${date.toLocaleString('pt-BR')} </div>
            <button id='close-posted-box' class='close-box' data-id='${post.id}'> <i class="fa fa-times"></i> </button>
          </div>
          <div class='posted-text' id='all-posts'> ${post.text} </div>
          <div class='interaction-space'>
            <div class='btn-space'>
              <div class='like-space'>
                <div class='like-number'>${post.likes}</div>
                <a id='like-btn' class='like-btn' >
                  <i class="fa fa-heart"></i> </a>
              </div>
              <button id='comment-btn' class='btn-style btn-comment'> Comentar </button>
            </div>
          </div>
          <div class='space-comment'></div>
        </div>
  `;
    return postElement;
  };

  const newComment = (comment) => {
    const templateComment = document.createElement('div');
    templateComment.innerHTML = `
    <div class='space-wrapper'>
          <textarea id='space-comment' class='space-comment' type='text' required placeholder='comente aqui'></textarea>
          <div class='comment-btn-space'>
            <button class='btn-save-comment icon-comment-style'><i class='fa fa-paper-plane-o'></i></button>
            <button class='btn-edit-comment icon-comment-style'><i class='fa fa-pencil'></i></button>
            <button class='btn-delete-comment icon-comment-style'><i class='fa fa-trash-o'></i></button>
          </div>
        </div>
    `;
    return templateComment;
  };

  // Send post elements
  const postSendForm = container.querySelector('#post-send-form');
  const postText = postSendForm.querySelector('#post');
  const postPublic = postSendForm.querySelector('#public-option');
  const sendPostBtn = postSendForm.querySelector('#send-btn');

  // Post list elements
  const allPosts = container.querySelector('#all-posts');
  const btnSaveComment = container.querySelector('.btn-save-comment');

  // User management elements
  const btnSignOut = container.querySelector('#sign-out');
  const btnProfile = container.querySelector('#btn-profile');

  function profile(name) {
    container.querySelector('#name-information').innerHTML = `Olá, ${name}!`;
  }

  loggedUser(profile);

  const isPostAllowed = (post) => {
    const currentUser = firebase.auth().currentUser;
    // Se a usuária atual é a autora do post, ela é pode ver
    // Não é preciso conferir se é privado ou não
    if (post.userUid === currentUser.uid) {
      return true;
    }
    // Se a usuária atual não é a autora, a propriedade 'public' pode ser vista.
    return post.public;
  };

  const postTemplate = (array) => {
    allPosts.innerHTML = '';
    // Take a peek at all the posts we may, ou may not, show on the page
    // console.log(array);
    array.forEach((posts) => {
      if (!isPostAllowed(posts)) { // Se não se aplica aos casos de isPostAllowed, return para interromper.
        return;
      }
      const postElements = newPost(posts);
      const btnDelete = postElements.querySelector('.close-box');
      btnDelete.addEventListener('click', () => {
        deletePost(posts.id);
        postElements.innerHTML = '';
      });
      const btnLike = postElements.querySelector('.like-btn');
      btnLike.addEventListener('click', (event) => {
        event.preventDefault();
        updateLike(posts.id);
      });
      const btnComment = postElements.querySelector('.btn-comment');
      btnComment.addEventListener('click', (event) => {
        event.preventDefault();
        const spaceComment = postElements.querySelector('.space-comment');
        const commentElements = newComment();
        spaceComment.appendChild(commentElements);
      });
      allPosts.appendChild(postElements);
    });
  };

  createPost.readPosts(postTemplate);

  sendPostBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let isPublic = false;
    if (postPublic.checked) {
      isPublic = true;
    }
    const returnPosts = createPost.insertPosts(postText.value, isPublic);
    returnPosts
      .then(() => {
        createPost.readPosts(postTemplate);
      }).catch(error => error);

    document.getElementById('post').value = '';
  });

  /*  const createComment = (array) => {
          spaceComment.innerHTML = '';
      array.forEach((comment) => {
        const commentElements = newComment(comment);
        btn
        // const btnCommentDelete = postElements.querySelector('.close-box.');
        //  btnCommentDelete.addEventListener('click', () => {
          // deletePost(posts.id);
          // postElements.innerHTML = '';
        }); */

  btnSignOut.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
  });

  btnProfile.addEventListener('click', () => {
    window.location.href = '#profile';
  });

  /* -----------MENU HAMBURGER------------- */
  const navigationWrapperHome = container.querySelector('#navigation-wrapper-home');
  const homeHamburgerIcon = container.querySelector('#top-menu-home-icon');

  function toggleMenu() {
    navigationWrapperHome.classList.toggle('disable-display');
    homeHamburgerIcon.classList.toggle('hide-visibility');
  }

  container.querySelector('#menu-icon-home').addEventListener('click', toggleMenu);
  container.querySelector('#close-menu-icon-home').addEventListener('click', toggleMenu);
  /* -------------FIM MENU HAMBURGER----------- */

  return container;
};

/* button para versão web.
 <div>
          <button id='btn-sign-out' class='btn-style'>Sair</button>
        </div> */

// class='btn-style like-btn' botao like

/* ícone curtir com <button>
          <div class='like-space'>
            <div class='like-number'>${post.likes}</div>
            <button id='like-btn' class='like-btn' >
              <i class="fa fa-heart"></i> </button>
          </div> */
