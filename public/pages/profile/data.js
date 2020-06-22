export const loggedUser = (profile) => {
  firebase
    .auth()
    .onAuthStateChanged((user) => {
      if (!user) {
        return;
      }
      profile(user.displayName,
        user.photoURL);
    });
};

export const signOut = () => {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '#login';
      });
  }
};

/* export const createUser = (user) => {
  firebase.firestore().collection('users').add({
    photoUrl: user.photoURL,
  });
};

export const updatePhoto = () => {
  var user = firebase.auth().currentUser;

  user.updateProfile({
    // displayName: "Jane Q. User",
    photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });
};


/* readPosts(callback) {
  return firebase
    .firestore()
    .collection('post')
    .get()
    .then((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        posts.push({...doc.data(), id: doc.id });
      });
      callback(posts);
    });
},
}; */

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
}
