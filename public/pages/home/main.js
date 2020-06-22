import {
  loggedUser,
  createPost,
  signOut,
  deletePost,
  updateLike,
  updateComments,
} from './data.js';

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
      <div class='btn-box'>
        <button class='btn-login' type='submit' name='btn-login' id='btn-login'>Entrar</button>
      </div>
      <div class='sign-google'>Ou entre com:</div>
      <div class='icon-google'>
        <input type=image src='./images/logo-google.png' id='input-google'></input>
      </div>
      <div class='create-account'>
        Quer entrar para a rede? <a href='/#register'>Cadastre-se</a>
      </div>
    </div>
    `;

  const btnLogin = menuLogin.querySelector('#btn-login');
  const loginGoogle = menuLogin.querySelector('#input-google');

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

  loginGoogle.addEventListener('click', () => {
    signGoogle()
      .then((result) => {
        // const token = result.credential.accessToken;
        const user = {
          firstName: result.additionalUserInfo.profile.given_name,
          lastName: result.additionalUserInfo.profile.family_name,
          email: result.user.email,
        };
        firebase
          .firestore()
          .collection('users')
          .add(user);
        window.location.href = '#home';
      })
      .catch((error) => {
        // const errorCode = error.code;
        let errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
        if (error.code === 'auth/account-exists-with-different-credential') {
          errorMessage = 'Você já se inscreveu com um provedor de autenticação diferente para esse email.';
        } else if (error.code === 'auth/popup-closed-by-user') {
          errorMessage = ' A janela foi fechada antes de finalizar a operação. Tente novamente.';
        } else if (error.code === 'auth/cancelled-popup-request') {
          errorMessage = 'A operação foi cancelada';
        } else {
          errorMessage = (error);
        }
        const errorElement = menuLogin.querySelector('#message-error');
        errorElement.innerHTML = errorMessage;
      });
  });

  return menuLogin;
}; <
/div> <
div class = 'posted-text'
id = 'all-posts' > $ { post.text } < /div> <
  div class = 'privacy-wrapper'
id = 'privacy-options' >
  <
  div class = 'public-option' >
  <
  i class = 'fa fa-lock icon-style' > < /i> <
  input type = 'radio'
name = 'privacy'
id = 'private-option'
class = 'privacy-options'
value = "private" >
  <
  /div> <
  div class = 'private-option' >
  <
  i class = 'fa fa-globe icon-style' > < /i> <
  input type = 'radio'
name = 'privacy'
id = 'public-option'
class = 'privacy-options'
checked = "true"
value = "public" >
  <
  /div> <
  /div> <
  div class = 'interaction-space' >
  <
  div class = 'btn-space' >
  <
  div class = 'like-space' >
  <
  div class = 'like-number' > $ { post.likes } < /div> <
  a id = 'like-btn'
class = 'like-btn' >
  <
  i class = "fa fa-heart" > < /i> </a >
  <
  /div> <
  button id = 'comment-btn'
class = 'btn-style btn-comment' > Comentar < /button> <
  /div> <
  /div> <
  div class = 'space-comment' > < /div> <
  /div>
`;
    return postElement;
  };

  const newComment = (id) => {
    const templateComment = document.createElement('div');
    templateComment.innerHTML = ` <
div class = 'space-wrapper' >
  <
  textarea id = 'space-comment'
class = 'space-comment'
type = 'text'
required placeholder = 'comente aqui' > < /textarea> <
  div class = 'comment-btn-space' >
  <
  button class = 'btn-save-comment icon-comment-style' > < i class = 'fa fa-paper-plane-o' > < /i></button >
  <
  button class = 'btn-edit-comment icon-comment-style' > < i class = 'fa fa-pencil' > < /i></button >
  <
  button class = 'btn-delete-comment icon-comment-style' > < i class = 'fa fa-trash-o' > < /i></button >
  <
  /div> <
  div class = 'comment-posted' > < /div> <
  /div>
`;
    const btnSaveComment = templateComment.querySelector('.btn-save-comment');

    btnSaveComment.addEventListener('click', () => {
      const subComment = templateComment.querySelector('.space-comment').value;
      updateComments(id, subComment);
    });

    return templateComment;
  };

  // Send post elements
  const postSendForm = container.querySelector('#post-send-form');
  const postText = postSendForm.querySelector('#post');
  const postPublic = postSendForm.querySelector('#public-option');
  const sendPostBtn = postSendForm.querySelector('#send-btn');

  // Post list elements
  const allPosts = container.querySelector('#all-posts');

  // User management elements
  const btnSignOut = container.querySelector('#sign-out');
  const btnProfile = container.querySelector('#btn-profile');

  function profile(name) {
    container.querySelector('#name-information').innerHTML = `
$ { name }
`;
  }

  loggedUser(profile);

  const isPostAllowed = (post) => {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      return false;
    }
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
        // createPost.readPosts(postTemplate);
      });
      const btnComment = postElements.querySelector('.btn-comment');
      btnComment.addEventListener('click', (event) => {
        event.preventDefault();
        const spaceComment = postElements.querySelector('.space-comment');
        const commentElements = newComment(posts.id);
        spaceComment.appendChild(commentElements);
      });
      allPosts.appendChild(postElements);
    });
  };

  createPost.readPosts(postTemplate);
  // CommentsCollection.readComments();

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
// comentario
