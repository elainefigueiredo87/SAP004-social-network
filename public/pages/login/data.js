// export const logIn = (email, password) => {
/* if (firebase.auth().currentUser) {
  // [START signout]
  firebase.auth().signOut();
  // [END signout]
} else { */
// if (email < 4) {
//  console.log('Please enter an email address.');
// }
// if (password < 4) {
//  console.log('Please enter a password.');
// }
// };

export const signIn = (email, password) => {
  // Sign in with email and pass.
  // [START authwithemail]
  firebase.auth().signInWithEmailAndPassword(email, password).catch;
};

/* export const errors = (valueInput, error) => {
    if (valueInput.code === 'auth/wrong-password')
      console.log('Wrong password.');
    if (error.code)
  } */
// (function (error) {
// Handle Errors here.
// const errorCode = error.code;
// const errorMessage = error.message;
// [START_EXCLUDE]
// if (errorCode === 'auth/wrong-password') {
// console.log('Wrong password.');
// } else {
// console.log(errorMessage);
// }
// console.log(error);
// document.getElementById('btn-login').disabled = false;
// [END_EXCLUDE]
// });
// [END authwithemail]

// Sign in with email and pass.
// [START authwithemail]
/* firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
  document.getElementById('btn-login').disabled = false; */
// [END_EXCLUDE]
// });
// [END authwithemail]
// }
// document.getElementById('btn-login').disabled = true;
