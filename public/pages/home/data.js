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
          posts.push({ ...doc.data(), id: doc.id });
        });
        callback(posts);
      })
      .catch(() => {
        growl({
          text: 'Falha ao carregar página.', type: 'error', fadeAway: true, fadeAwayTimeout: 3000,
        });
      });
  },
};
export const signOut = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      })
      .catch(() => {
        growl({
          text: 'Falha ao desconectar. Tente novamente', type: 'error', fadeAway: true, fadeAwayTimeout: 3000,
        });
      });
  }
};

export const deletePost = (post) => {
  firebase.firestore().collection('post').doc(post).delete()
    .then(() => {
      growl({
        text: 'Post excluído com sucesso!', type: 'success', fadeAway: true, fadeAwayTimeout: 3000,
      });
    })
    .catch(() => {
      growl({
        text: 'Ocorreu um erro ao excluir o post. Tente novamente!', type: 'error', fadeAway: true, fadeAwayTimeout: 3000,
      });
    });
};

export const updateLike = (post) => {
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const storyRef = db.collection('post').doc(post);
  return storyRef.update({
    likes: increment,
  });
};

export const updatePost = (post, newText, privacy) => {
  const isPublic = privacy === 'public';
  const db = firebase.firestore();
  const storyRef = db.collection('post').doc(post);
  return storyRef.update({
    text: newText,
    public: isPublic,
  });
};

export const updateComments = (id, subComment) => {
  return firebase
    .firestore()
    .collection('post')
    .doc(id)
    .update({ comments: firebase.firestore.FieldValue.arrayUnion(subComment) });
};
