import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  signupGoogleAuthAsync, selectUser, signupEmailAndPasswordAsync } from '../features/user/userSlice';

const SignUp = () => {

  let history = useHistory();
  

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 
  
  let account = {
    email: "",
    password: "",
    confirmPassword: ""
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

    dispatch(signupEmailAndPasswordAsync(account));

    account.password = "";
    account.confirmPassword = "";
    account.email = "";
    history.push('/');
      
  
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
      <button onClick={() => dispatch(signupGoogleAuthAsync())} className='google-btn btn-block'>Sign up with Google</button>
    </div>
    )
  }
  
  
  export default SignUp
  