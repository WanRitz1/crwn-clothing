import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyDpf3BS1gS1DEfuDfu4Y4kGypIwTgT1Nvc",
        authDomain: "crwncloths-db.firebaseapp.com",
        databaseURL: "https://crwncloths-db.firebaseio.com",
        projectId: "crwncloths-db",
        storageBucket: "crwncloths-db.appspot.com",
        messagingSenderId: "462257542845",
        appId: "1:462257542845:web:641bd4c754808dad73c9d4",
        measurementId: "G-RDS9W4JK9T"
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
