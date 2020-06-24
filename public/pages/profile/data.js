export const loggedUser = (profile) => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      profile(user.displayName);
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

/* export const updateInformation = () => {
  const displayName = `${firstName} ${lastName}`;
  const db = firebase.firestore();
  const storyRef = db.collection('users').doc();
  return storyRef.update({
    displayName,
  });
}; */
