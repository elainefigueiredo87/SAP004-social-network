export const createAccount = {
  signRegister(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};

export const sendEmailVerification = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    alert('Email Verification Sent!');
  });
};
