import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Input, Layout, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

 function App() {
  const [email,setEmail] = useState('');
  const navigate = useNavigate();

  const success = () => {
    Modal.success({
      content:  <div>
      <p>OTP is sent to {email}. Please check your email.</p>
      <Input type="text" placeholder="Enter OTP" />
      <button style={{marginTop:20}} onClick={()=>navigate('/UpdatePassword')}>Submit OTP</button>

    </div>
    });
  };
  const updatePassword = async () =>{
    try{
         const response = await fetch(`http://localhost:3000/GetUserByEmail/${email}`);
         if(!response.ok){
          throw new Error('Network response not ok')
        }
        const jsonData = await response.json();
        console.log("response is okay", jsonData);

    }
     catch(e){
       console.error(e);

   }
  }
  return (
  <div className='main'>
    <div className="container-img">

<img className='img-logo' src={'../src/assets/Logo (2).png'}/>
  <img  style={{width:400, height:300}} src="../src/assets/passwordreset.png"></img>

</div>
  <div className='container' style={{marginTop:-10}}>
  <div className='header'>
    <div className='text' >Reset Password!</div>
    <div className='underline'></div>
    <span className='short-text2'>Enter Email so we can send an OTP to reset your password</span>
  </div>
  <div className="inputs">

    <div className="input" >
      <input type="text" placeholder='Enter Email Address' onChange={text => setEmail(text.target.value)}></input>
    </div>

    <div className='submit-container' >
      <button className='submit' onClick={()=>{updatePassword(),success()}}>Send OTP</button>
    </div>
  </div>
</div>

</div>
  );
}

export default App;