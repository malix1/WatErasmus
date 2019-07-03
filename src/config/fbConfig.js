import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyByRSNJRXcrNfvQ327QvNmIeZUj3EeaqYw",
    authDomain: "waterasmus.firebaseapp.com",
    databaseURL: "https://waterasmus.firebaseio.com",
    projectId: "waterasmus",
    storageBucket: "waterasmus.appspot.com",
    messagingSenderId: "793305102325",
    appId: "1:793305102325:web:a52c50bfa153d542"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* firebase.firestore().settings({ timestampsInSnapshots: true }); */

export default firebase;