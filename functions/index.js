const functions = require('firebase-functions');
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sreeram-stage.firebaseapp.com",
  databaseURL: "https://sreeram-stage.firebaseio.com",
  projectId: "sreeram-stage",
  storageBucket: "sreeram-stage.appspot.com",
  messagingSenderId: "857242952614",
};

firebase.initializeApp(firebaseConfig);

const pictures = require('./pictures.json');

exports.pictures = functions.https.onRequest((req, res) => {
  res.send(pictures);
});