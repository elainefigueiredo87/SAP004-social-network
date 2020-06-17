export const createPost = {
  insertPosts(text) {
    return firebase
      .firestore()
      .collection('post')
      .add({
        text,
        likes: 0,
        userUid: firebase.auth().currentUser.uid,
        user: firebase.auth().currentUser.displayName,
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
          console.log(doc.id);
          posts.push({...doc.data(), id: doc.id });
        });
        callback(posts);
      });
  },
};

export const signOut = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      });
  }
};

export const deletePost = (post) => {
  firebase.firestore().collection('post').doc(post).delete()
    .then(() => {
      console.log('document sucessfully deleted');
    });
  //.catch(function (error) {
  //  console.log('error removing document:', error);
  //});
};
