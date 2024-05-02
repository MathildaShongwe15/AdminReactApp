
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export function Login() {

  const navigate = useNavigate();
  return (
    <>
    <div className='container'>
      <div className='header'>
         <img  src={'../src/assets/Logo (2).png'}/>
        <div className='text' >Welcome Back!</div>
        <div className='underline'></div>
        <span className='short-text'>We have missed you.  Sign up to continue</span>
      </div>
      <div className="inputs">
        <div className="input" >
          <input type="text" placeholder='Enter Email Address'></input>
        </div>
        <div className="input">
          <input type="password" placeholder='Enter Password'></input>
        </div>
        <a href="" onClick={() => navigate('/ResetPassword')}>Don't have an account? Sign Up</a>

        <div className='submit-container' >


          <button className='submit' onClick={() => navigate('/ManageProvider')}>Sign Up</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Login
