export const login = {
  signIn(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  },
};

/* firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => console.log("deu certo"))
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim")
      // ...
  }); */
