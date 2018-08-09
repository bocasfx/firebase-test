const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true,
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  const id = functions.config().someservice.id;
  const key = functions.config().someservice.key
  return cors(request, response, () => {
    response.send(`Hello from Firebase. ID: ${id} Key: ${key}`);
  });
});
