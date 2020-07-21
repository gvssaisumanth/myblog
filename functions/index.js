const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.bookprojectCreated = functions.firestore
  .document('books/{bookId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a book post',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});
exports.animeprojectCreated = functions.firestore
  .document('anime/{animeId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added an anime post',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});
exports.techprojectCreated = functions.firestore
  .document('tech/{techId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a tech post',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        console.log("User",newUser)
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});