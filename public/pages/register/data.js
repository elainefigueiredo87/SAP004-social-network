export const createAccount = {
  signRegister(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};

export const createUser = (email, firstName, lastName, user) => {
  firebase.firestore().collection('users').add({
    firstName,
    lastName,
    email,
    userUid: firebase.auth().currentUser.uid,
    photoUrl: user.photoURL,
  });
};

export const createProfile = (firstName, lastName, photoUrl) => {
  firebase
    .auth()
    .currentUser.updateProfile({ displayName: `${firstName} ${lastName}`, photoUrl: `${photoUrl}` });
};

export const sendEmailVerification = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    alert('Email Verification Sent!');
  });
};
