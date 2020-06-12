import { createPost, readPosts, signOut } from './data.js';
import { initApp } from '../../components.js';

export const home = () => {
  initApp();
  const container = document.createElement('div');

  container.className = ('feed-wrapper');

  container.innerHTML = `
    <div class='profile-box'>
      <div class='profile-img'>
        <img src='https://placekitten.com/100/100'>
      </div>  
      <div id='user-informations' class='user-informations'> 

        <div class='user-role'>Estudante</div>
      </div>
      <div>
      <button id='btn-sign-out' class='btn-style'>Sair</button>
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
  const newPost = (text) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
  <div class = 'posted-box'>
    <div class = 'published-by'>
      <div class = 'by-line'>Publicado por Patrícia Santos </div>
      <div id = 'close-posted-box' class = 'close-box'> X </div>
    </div>
    <div class = 'posted-text' id = 'all-posts'> ${text} </div>
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
  const btnSignOut = container.querySelector('#btn-sign-out');

  const postTemplate = (array) => {
    allPosts.innerHTML = '';
    (array.map(posts => allPosts.appendChild(newPost(posts.text))).join(''));
  };

  readPosts(postTemplate);

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value);
    readPosts(postTemplate);
    document.getElementById('post').value = '';
  });

  btnSignOut.addEventListener('click', (event) => {
    event.preventDefault();
    signOut();
  });

  return container;
};
