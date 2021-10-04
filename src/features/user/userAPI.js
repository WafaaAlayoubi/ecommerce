import  { signOut, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";

export function signupGoogleAuth() {
  
const auth = getAuth();
const provider = new GoogleAuthProvider();

return new Promise((resolve) =>
  signInWithPopup(auth, provider)
  .then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
const user = result.user;
const db = getDatabase();
  set(ref(db, 'users/' + user.uid), {
    username: user.displayName,
    cart:[]
  });
resolve({ data: user });
// The signed-in user info.
// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
})
);
}


export function signupEmailAndPassword(account) {

const auth = getAuth();

  return new Promise((resolve) =>
  createUserWithEmailAndPassword(auth, account.email, account.password)
  .then((userCredential) => {
    // Signed in 
    resolve({ data: userCredential.user });          
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })

  );
}

export function signinEmailAndPassword(account) {

  const auth = getAuth();
  
      return new Promise((resolve) =>
      
      signInWithEmailAndPassword(auth, account.email, account.password)
      .then((userCredential) => {
        // Signed in 
        let xee = userCredential.user;
        xee = JSON.stringify(xee); 
        //xee = JSON.parse(xee);
        window.sessionStorage.setItem('user',xee);
        resolve({ data: userCredential.user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        resolve({ data: {auth: false} });
      })

      );
  }

export function checkUser() {

  const auth = getAuth();
  
  return new Promise((resolve) =>
  onAuthStateChanged(auth, () => {
    if (auth.currentUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      resolve({ data: auth.currentUser });
      // ...
    } else {
      // User is signed out
      // ...
      resolve({ data: {auth: true} });
    }
  })
  );
}

export function signOutUser() {

  const auth = getAuth();
  
  return new Promise((resolve) =>
  signOut(auth).then(() => {
    // Sign-out successful.
    resolve({ data: {auth: true} });
  }).catch((error) => {
    // An error happened.
  })
  );
}

