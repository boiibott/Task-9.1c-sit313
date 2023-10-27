import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

  // Firebase configuration
  const firebaseConfig = {
    // Your Firebase configuration
    apiKey: "AIzaSyClX9eNwcP4QAOfIJO9SuVyYvvvsUlmqzk",
    authDomain: "loginapp-dc142.firebaseapp.com",
    projectId: "loginapp-dc142",
    storageBucket: "loginapp-dc142.appspot.com",
    messagingSenderId: "724019492653",
    appId: "1:724019492653:web:7de87425f28fe714c505a4",
    measurementId: "G-XW96R75RXC"
  };
  initializeApp(firebaseConfig); // Remove the assignment to 'app'
  // Google Auth Provider
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export { provider };


provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();
export const createuserdocfromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapShots = await getDoc(userDocRef);
  console.log(userSnapShots)
  console.log(userSnapShots.exists())

  if (!userSnapShots.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log('error in creating', error.message)
    }
  }
  return userDocRef;
}
export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function signinAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return
  return await signInWithEmailAndPassword(auth, email, password)
}
