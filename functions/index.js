const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({
  origin: true,
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  const key = functions.config().googlesearch.key
  return cors(request, response, () => {
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=017576662512468239146:omuauf_lfve&q=lectures`)
      .then((res) => {
        return response.send(`Hello from Firebase. \n ${ JSON.stringify(res.data.queries) }`);
      })
      .catch((err) => {
        response.send(`Error: ${err}`);
      });
  });
});
