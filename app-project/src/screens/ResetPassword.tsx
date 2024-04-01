import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

 function App() {

  return (
  <>
  <div className='container'>
  <div className='header'>
     <img  src={'../src/assets/Logo (2).png'}/>
    <div className='text' >Reset Password!</div>
    <div className='underline'></div>
  </div>
  <div className="inputs">
  <div className="input" >
      <input type="text" placeholder='Enter OTP'></input>
    </div>
    <div className="input" >
      <input type="text" placeholder='Enter Email Address'></input>
    </div>
    <div className="input">
      <input type="password" placeholder='Enter New  Password'></input>
    </div>
    <div className="input">
      <input type="password" placeholder='Confirm Password'></input>
    </div>
    <div className='submit-container' >
      <button className='submit'>Sign Up</button>
    </div>
  </div>
</div>

</>
  );
}

export default App;