export const login = {
  signIn(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log('deu certo'))
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (error.code === 'auth/wrong-password') {
          errorCode = 'Credenciais inválidas';
        } else if (error.code === 'auth/invalid-email') {
          errorCode = 'Formato do email inválido';
        } else {
          errorMessage = error.message;
        }
        console.log(error);
      });
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
