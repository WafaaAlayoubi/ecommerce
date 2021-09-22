import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  signupGoogleAuthAsync, selectUser, signinEmailAndPasswordAsync} from '../features/user/userSlice';

const SignIn = () => {

  let history = useHistory();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {

    e.preventDefault()

  dispatch(signinEmailAndPasswordAsync({email,password}));
  
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
          onChange={(e) => setEmail(e.target.value)}
           required
        />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {user.auth === false && (
        <span style={{ color: "red" }}>Wrong Passsword</span>
      )}
      {
        (user.auth !== false && user.auth !== undefined) && (() => onsubmit())
      }

      <input type='submit' value='Sign In' className='btn btn-block' />
    </form>
    <button onClick={() => {
    dispatch(signupGoogleAuthAsync())
    history.push('/');
    }} className='google-btn btn-block'>Sign In with Google</button>
  </div>
    )
  }
  
  
  export default SignIn
  