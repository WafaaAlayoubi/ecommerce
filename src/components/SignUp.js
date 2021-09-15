import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  signupAsync, selectUser } from '../features/user/userSlice';
import  { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from 'firebase/auth';


const SignUp = () => {

  let history = useHistory();
  const auth = getAuth();
const provider = new GoogleAuthProvider();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 
  
  let account = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  const loginWithGoogle = () => {
    
    
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
      console.log(user);
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
        <h1>{ user.name }</h1>
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
      <button onClick={() => dispatch(signupAsync())} className='google-btn btn-block'>Sign up with Google</button>
    </div>
    )
  }
  
  
  export default SignUp
  