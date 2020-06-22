export const loggedUser = (profile) => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      profile(user.displayName,
        user.photoURL);
    });
};

export const createPost = {
  insertPosts(text, isPublic) {
    return firebase
      .firestore()
      .collection('post')
      .add({
        text,
        likes: 0,
        comments: [],
        userUid: firebase.auth().currentUser.uid,
        user: firebase.auth().currentUser.displayName,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        public: isPublic,
      });
  },
  readPosts(callback) {
    return firebase
      .firestore()
      .collection('post')
      .orderBy('time', 'desc')
      .get()
      .then((querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          posts.push({...doc.data(), id: doc.id });
        });
        callback(posts);
      });
  },
};

// início da inclusão de collection p/comentários, falta chamar no main.js

export const commentsCollection = {
  insertComment(txtComment) {
    return firebase
      .firestore()
      .collection('comments')
      .add({
        text: txtComment,
        userUid: firebase.auth().currentUser.uid,
        user: firebase.auth().currentUser.displayName,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
  },
  readComments() {
    return firebase
      .firestore()
      .collection('comments')
      .get()
      .then((querySnapshot) => {
        const comments = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          comments.push({...doc.data(), id: doc.id });
        });
        // callback(comments);
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
  // .catch(function (error) {
  //  console.log('error removing document:', error);
  // });
};

export const updateLike = (post) => {
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const storyRef = db.collection('post').doc(post);
  storyRef.update({
    likes: increment,
  });
};
