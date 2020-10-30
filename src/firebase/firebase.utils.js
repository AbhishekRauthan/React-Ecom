import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcLjPNFkdPHXwLHot6XxOXMc96zRAS7KI",
  authDomain: "ecom-project-b0381.firebaseapp.com",
  databaseURL: "https://ecom-project-b0381.firebaseio.com",
  projectId: "ecom-project-b0381",
  storageBucket: "ecom-project-b0381.appspot.com",
  messagingSenderId: "650111767695",
  appId: "1:650111767695:web:347e16e0147c3d0d138cfa"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }
  console.log(fireStore.doc('users/1212fsdfgrea'))
}

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
