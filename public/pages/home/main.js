// Aqui serão criados os eventos de Manipulação de DOM e templates
// import { greeting } from './data.js';

// const greeting = name => `Oi ${name}! Que bom ver você aqui!`;

export const home = () => {
  const container = document.createElement('div');

  const templateFeed = `
  <div class="feed-wrapper">
    <div class="profile-box">
      <div class="profile-img">
        <img src="https://placekitten.com/100/100">
      </div>  
      <div class="user-informations">  
        Ana Maria Silva
        <div class="user-role">Estudante</div>
      </div>
    </div>

    <div class="post-box">
      <form>
        <textarea id="post" class="post-text" placeholder="Compartilhe aqui o seu conhecimento" type="text" required></textarea>
        <div class="all-buttons">
          <button id="send-photo" class="btn-style">Foto</button>
          <button id="send-btn" class="btn-style">Compartilhar</button>
        </div>
      </form>
    </div>

    <div class="posted-box">
      <div class="published-by">
        <div class="by-line">
          Publicado por Patrícia Santos
        </div>
        <div id="close-posted-box" class="close-box">X</div>
      </div>
      <div class="posted-text">
      <p>Oi, meninas!!<p>
      </div>  
      <div class ="all-buttons">
        <button id="like-btn" class="btn-style">Curtir</button>
        <button id="comment-btn" class="btn-style">Comentar</button>    
      </div>
    </div>  
  </div>

  `;

  container.innerHTML = templateFeed;

  return container;
};

// const name = container.querySelector('#name');
// const sendBtn = templatePost.querySelector('#sendBtn');
// const greetingMessage = container.querySelector('#greeting-message');

// sendBtn.addEventListener('click', (event) => {
// event.preventDefault();
// greetingMessage.innerHTML = greeting(name.value);
// });
