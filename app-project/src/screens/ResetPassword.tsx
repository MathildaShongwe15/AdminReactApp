import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Layout } from 'antd';
import React from 'react';

 function App() {

  return (
  <div className='main'>
    <div className="container-img">

<img className='img-logo' src={'../src/assets/Logo (2).png'}/>
  <img  className='img-main' src="../src/assets/work.png"></img>

</div>
  <div className='container'>
  <div className='header'>
     <img  src={'../src/assets/Logo (2).png'}/>
    <div className='text' >Reset Password!</div>
    <div className='underline'></div>
    <span className='short-text2'>Enter Email so we can send an OTP to reset your password</span>
  </div>
  <div className="inputs">

    <div className="input" >
      <input type="text" placeholder='Enter Email Address'></input>
    </div>

    <div className='submit-container' >
      <button className='submit'>Send OTP</button>
    </div>
  </div>
</div>

</div>
  );
}

export default App;