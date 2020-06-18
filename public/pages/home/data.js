export const loggedUser = (profile) => {
  firebase
    .auth()
    .onAuthStateChanged(() => {
      profile(firebase.auth().currentUser.displayName,
        firebase.auth().currentUser.photoURL);
    });
};

/* function convertTime(date) {
  // let d = new Date(1556322834000);
  // let d = new Date(`${time.value}`);
  return date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  //  console.log(moment.tz(1556322834000, "America/Sao_Paulo").format());
} */

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
        time: firebase.firestore.FieldValue.serverTimestamp(),
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
  // .catch(function (error) {
  //  console.log('error removing document:', error);
  // });
};
