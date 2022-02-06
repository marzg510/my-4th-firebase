const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.region('asia-northeast1').https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.set('Access-Control-Allow-Origin', 'http://localhost:3000'); // localhostを許可
  response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST'); // DELETEだけは拒否
  response.set('Access-Control-Allow-Headers', 'Content-Type'); // Content-Typeのみを許可
  response.send("Hello from Firebase!");
});
