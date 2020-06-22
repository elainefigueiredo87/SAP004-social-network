export const createAccount = {
  signRegister(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};

export const createUser = (email, firstName, lastName) => {
  return firebase.firestore().collection('users').add({
    firstName,
    lastName,
    email,
    userUid: firebase.auth().currentUser.uid,
    // photoUrl: user.photoURL,
  });
};

export const createProfile = (firstName, lastName) => {
  return firebase
    .auth()
    .currentUser.updateProfile({
      displayName: `${firstName} ${lastName}`,
      // photoUrl: `${photoUrl}`,
    });
};

export const signOut = () => {
  if (firebase.auth().currentUser) {
    return firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      });
  }
  return Promise.resolve(); // retorna uma promessa que já foi resolvida.
};
export const sendEmailVerification = () => {
  return firebase.auth().currentUser.sendEmailVerification().then(() => {
    alert('Email Verification Sent!');
    signOut();
  });
};
