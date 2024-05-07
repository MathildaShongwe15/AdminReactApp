import { useEffect, useState } from 'react'
import { Avatar, Button,Form,Input } from 'antd';
import '../App.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';


 function App() {

  const navigate = useNavigate();
  const [data,setData] = useState<any>();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

const getUserData = async () =>{

    const UserId = await localStorage.getItem("USERID");

        await fetch(`http://localhost:3000/Users/${UserId}`,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
          })
          .then(response => {
            if(!response.ok){
              throw new Error('Network response not ok'),
              console.log(response)
            }
            console.log("response is okay", response)
            return response.json();
          })
          .then(data => (setData(data.user)))
          .catch(err => console.log(err))
  }
  const updateUserData = async () =>{

    const data1 = {firstName:firstName,lastName:lastName,email:email,phoneNumber:phoneNumber}
    const UserId = await localStorage.getItem("USERID");

    try{
         let result = await fetch(`http://localhost:3000/UserUpdate/${UserId}`,{

             method: 'PUT',
             headers:{
                 'Accept': 'application/json',
                 'Content-Type':'application/json'
             },
             body: JSON.stringify(data1)

             });
             result = await result.json();
   }
     catch(e){
       console.error(e);
   }
   navigate("/Home")
  }
  useEffect(() => {
    getUserData();
  },[]);
  return (
    <div className="main" style={{backgroundColor:'#070F2B'}}>
    <div  className='container-profile'>
    <h2 style={{marginTop:-50}}>Update Profile</h2>

    <Avatar
  size={80}
  shape="circle"
  src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
<p>Update Profile Information below</p>
    <Form
      name="basic"
      initialValues={{ remember: true }}
      style={{ width: 500, alignItems:'center', marginTop:30, marginLeft:120}}
    >
      <Form.Item
        label="First Name:"
        name="FirstName"
        rules={[{ required: false, message: '*Required' }]}

      >
        <Input placeholder={data?.First_Name}  style={{width:250}}  onChange={text => setFirstName(text.target.value)} />
      </Form.Item>
      <Form.Item
        label="Last Name:"
        name="LastName"
        rules={[{ required: false, message: '*Required' }]}
      >
        <Input placeholder={data?.Last_Name} style={{width:250}} onChange={text => setLastName(text.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: false, message: '*Required' }]}
        style={{width:250, marginLeft:30}}
      >
        <Input placeholder={data?.Email} style={{width:250}} onChange={text => setEmail(text.target.value)} />
      </Form.Item>
      <Form.Item
        label="ID Number"
        name="ID"
        rules={[{ required: false, message: '*Required' }]}
        style={{width:250, marginLeft:0}}
      >
        <Input style={{width:250}} />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone number"
        rules={[{ required: false, message: '*Required' }]}
        style={{width:150,marginLeft:-30 }}
      >
        <Input placeholder={data?.PhoneNumber} style={{width:250}} onChange={text => setPhoneNumber(text.target.value)} />
      </Form.Item>


<div style={{flexDirection:'row', display:'flex'}}>

      <Form.Item style={{maxWidth:550, marginLeft:10}}>
        <Button  htmlType="submit" style={{width:350, background:"#"}} onClick={updateUserData} >
          Update
        </Button>
        <Button  type="primary" htmlType="submit"     style={{width:350, background:"#", marginTop:10}} onClick={updateUserData} >
          Back
        </Button>

      </Form.Item>

</div>
    </Form>

</div>
</div>
  );
}

export default App;