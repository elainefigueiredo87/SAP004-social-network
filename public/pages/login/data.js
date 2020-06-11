export const login = {
  signIn(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  },
};

export const signGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // const token = result.credential.accessToken;
      const user = {
        firstName: result.additionalUserInfo.profile.given_name,
        lastName: result.additionalUserInfo.profile.family_name,
        email: result.user.email,
      };
      firebase
        .firestore()
        .collection('users')
        .add(user);
      window.location.href = '#home';
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Você já se inscreveu com um provedor de autenticação diferente para esse email.');
      } else {
        console.error(error);
        // } else if (error.email === 'auth/) {
        //  alert
      }
    });
};
