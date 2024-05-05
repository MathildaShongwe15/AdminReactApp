
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { Modal } from 'antd';

export function Login() {
  const navigate = useNavigate();

  const {onLogin,authState} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const handleOk = () => {
    setVisible(false);

  };
  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };
  const login = async() =>{
    console.log("!!!",authState?.authenticated)

   const CODE =  await localStorage.getItem("CODE");

   onLogin!(email,password);

    if(CODE === "false"){
      showModal();

    }else{
      navigate('/Users');
    }

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
    <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        title="Incorrect Password or Email."
      >
        <p>Please try again</p>
      </Modal>
    </div>
  )
}

export default Login;
