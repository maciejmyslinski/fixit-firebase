const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addUserToFirestore = functions.auth
  .user()
  .onCreate(({ data: { displayName, email, photoURL, uid } }) => {
    return admin
      .firestore()
      .collection('users')
      .doc(uid)
      .set({
        displayName,
        email,
        photoURL
      });
  });
