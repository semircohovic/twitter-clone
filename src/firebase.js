import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNQTalcr_JfXznbWA5B77fTC4ZumEz43w",
    authDomain: "twitter-clone-def03.firebaseapp.com",
    databaseURL: "https://twitter-clone-def03.firebaseio.com",
    projectId: "twitter-clone-def03",
    storageBucket: "twitter-clone-def03.appspot.com",
    messagingSenderId: "914891671318",
    appId: "1:914891671318:web:3023efea00609e1b147237",
    measurementId: "G-GQ3R4R7RGJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;