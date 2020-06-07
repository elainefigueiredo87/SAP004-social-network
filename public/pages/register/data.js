export const createAccount = {
  signRegister(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};
