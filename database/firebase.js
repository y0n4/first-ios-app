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
exports.storeEntry = function(data) {
  firebase.database().ref('/entry').set({
    time: data.date,
    entry1: data.entry1,
    entry2: data.entry2,
    entry3: data.entry3
  });
}