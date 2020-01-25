import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { userRef } from 'react';

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

export const createUserProfileDocument= async(userAuth, additionalData) => {
        if(!userAuth) return;
       // console.log(firestore.doc('users/123sdbfksbfkb'));
        const userRef=firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        console.log(snapShot);

        if(!snapShot.exists){
                const {displayName,email} = userAuth;
                const createdAt = new Date();

                try{
                   await userRef.set({
                           displayName, email,createdAt, ...additionalData
                   })          
                } catch (error){
                                console.log('error creating user', error.message);
                }
                
        }
        return userRef;
};




firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
