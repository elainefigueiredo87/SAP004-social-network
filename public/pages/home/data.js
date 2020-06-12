export const createPost = (text) => {
  // Add a new document with a generated id.
  firebase.firestore().collection('post').add({
      text: text,
      likes: 0,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
}

export const readPosts = (callback) => {
  firebase.firestore().collection('post')
    .get()
    .then(function (querySnapshot) {
      var posts = [];
      querySnapshot.forEach(function (doc) {
        posts.push(doc.data());
      });

      callback(posts)
    });
}

export const signOut = () => {
  if (firebase.auth().currentUser) {
    console.log('desconectando user');
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      });
  }
};
