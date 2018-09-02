import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyArT2n0g4o8RtJIaF6FcAHEHsKTC8j82_A",
  authDomain: "first-ios-app-3537c.firebaseapp.com",
  databaseURL: "https://first-ios-app-3537c.firebaseio.com",
  projectId: "first-ios-app-3537c",
  storageBucket: "first-ios-app-3537c.appspot.com",
  messagingSenderId: "898624680174"
};
firebase.initializeApp(firebaseConfig);

//stores journal entry and date
exports.storeEntry = function(data, cb) {
  firebase.database().ref('entry/').push({
    time: data.date,
    entry1: data.entry1,
    entry2: data.entry2,
    entry3: data.entry3
  }).then((res) => {
    console.log('entry is saved!');
  }).catch((err) => {
    console.log('err');
  });
}

exports.retrieveEntries = function(callback) {
  firebase.database().ref().on('value', (snapshot) => {
    // console.log(snapshot.val());
    callback(snapshot.val());
  }, (err) => {
    console.log(err);
  });
}