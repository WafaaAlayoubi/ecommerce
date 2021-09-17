import  { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';

export function signupGoogleAuth() {
  
const auth = getAuth();
const provider = new GoogleAuthProvider();

    return new Promise((resolve) =>
      signInWithPopup(auth, provider)
     .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    resolve({ data: token });
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
  
