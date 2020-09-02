export const createAccount = {
  signRegister(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
};

export const createUser = {
  newUser(email, firstName, lastName, role) {
    return firebase.firestore().collection('users').add({
      firstName,
      lastName,
      email,
      role,
      userUid: firebase.auth().currentUser.uid,
    });
  },
};

export const createProfile = {
  newProfile(firstName, lastName) {
    return firebase
      .auth()
      .currentUser.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
  },
};

export const signOut = () => {
  if (firebase.auth().currentUser) {
    return firebase.auth().signOut();
  }
  return Promise.resolve();
};

export const emailVerification = {
  sendEmailVerification() {
    return firebase.auth().currentUser.sendEmailVerification().then(() => {
      signOut();
    });
  },
};
