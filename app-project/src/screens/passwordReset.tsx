import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Layout, Modal } from 'antd';
import React from 'react';

 function App() {
  const [password,setpassword] = useState('');
  const [passwordConfirm,setpasswordConfirm] = useState('');

  const success = () => {
    Modal.success({
      content: ' Password has been reset been successfully!',
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
    <span className='short-text2'>Change your password below</span>
  </div>
  <div className="inputs">

    <div className="input" >
      <input type="text" placeholder='Enter new password' onChange={text => setpassword(text.target.value)}></input>
    </div>
    <div className="input" >
      <input type="text" placeholder='Confirm new password' onChange={text => setpasswordConfirm(text.target.value)}></input>
    </div>

    <div className='submit-container' >
      <button className='submit' onClick={()=>{success()}}>Reset Password</button>
    </div>
  </div>
</div>

</div>
  );
}

export default App;