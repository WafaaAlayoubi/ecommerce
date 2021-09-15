import  { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

  let history = useHistory();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  
  let account = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  const loginWithGoogle = () => {
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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
  });
  }

  const onSubmit = (e) => {

    e.preventDefault()
    if( account.password !== account.confirmPassword)
    {
      account.password = "";
      account.confirmPassword = "";
      alert("password doesnt match");
      return;      
    }
    createUserWithEmailAndPassword(auth, account.email, account.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    account.email = "";
      account.password = "";
      account.confirmPassword = "";
      history.push('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
      
  
  }

    return (
      <div className='container'>
        <form className='add-form' onSubmit={onSubmit} >
        <div className='form-control'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Add Email'
            onChange={(e) => account.email = e.target.value}
             required
          />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => account.password = e.target.value}
            required
          />
        </div>
        <div className='form-control'>
          <label>Confirm Password</label>
          <input
            type='password'
            placeholder='Confirm Password'
            onChange={(e) => account.confirmPassword = e.target.value}
            required
          />
        </div>

        <input type='submit' value='Save Account' className='btn btn-block' />
      </form>
      <button onClick={loginWithGoogle} className='google-btn btn-block'>Sign up with Google</button>
    </div>
    )
  }
  
  
  export default SignUp
  