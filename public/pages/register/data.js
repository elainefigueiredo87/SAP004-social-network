export const createAccount = {
  signRegister(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};

export const createUser = (email, firstName, lastName) => {
  firebase.firestore().collection('users').add({
    firstName,
    lastName,
    email,
    userUid: firebase.auth().currentUser.uid,
  });
};

export const createProfile = (firstName, lastName) => {
  firebase
    .auth()
    .currentUser.updateProfile({ displayName: `${firstName} ${lastName}` });
}

export const sendEmailVerification = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    alert('Email Verification Sent!');
  });
};
