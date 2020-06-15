export const createPost = {
  insertPosts(text) {
    return firebase
      .firestore()
      .collection('post')
      .add({
        text,
        likes: 0,
      });
  },
  readPosts(callback) {
    return firebase
      .firestore()
      .collection('post')
      .get()
      .then((querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push(doc.data());
        });
        callback(posts);
      });
  },
};

// como estava antes
/* export const readPosts = (callback) => {
  firebase
    .firestore()
    .collection('post')
    .get()
    .then((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });
      callback(posts);
    });
}; */

export const signOut = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      });
  }
};
