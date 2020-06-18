export const loggedUser = (profile) => {
  firebase
    .auth()
    .onAuthStateChanged(() => {
      profile(firebase.auth().currentUser.displayName,
        firebase.auth().currentUser.photoURL);
    });
};

export const signOut = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      });
  }
};
