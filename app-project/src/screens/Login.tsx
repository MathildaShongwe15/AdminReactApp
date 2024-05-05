
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

export function Login() {
  const navigate = useNavigate();

  const {onLogin,authState} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async() =>{
    console.log("!!!",email, password)
    onLogin!(email,password);
    navigate('/Users');
    console.log("Logged in" ,authState?.authenticated)

   }
  return (
    <div className='main'>

    <div className="container-img">

    <img className='img-logo' src={'../src/assets/Logo (2).png'}/>
      <img  className='img-main' src="../src/assets/work.png"></img>

    </div>
    <div className='container'>
      <div className='header'>

        <div className='text' >Admin Portal!</div>
        <div className='underline'></div>
        <span className='short-text'>Welcome back!. We have missed you.</span>
      </div>
      <div className="inputs">
        <div className="input"  >
          <input type="text" placeholder='Enter Email Address'  onChange={(text)=>setEmail(text.target.value)}></input>
        </div>
        <div className="input">
          <input type="password" placeholder='Enter Password' onChange={(text)=>setPassword(text.target.value)}></input>
        </div>
        <a href="" onClick={() => navigate('/ResetPassword')}>Don't have an account? Sign Up</a>

        <div className='submit-container' >


          <button className='submit' onClick={login}>Sign Up</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Login;
