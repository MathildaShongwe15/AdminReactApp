import { useEffect, useState } from 'react'
import { Button, Card,Form,Input,Modal,Select,Table, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/loading';
import Sidebar from '../../components/SideBar';
import uuidv4 from 'react-uuid';

 function App() {
  const [data, setData] = useState([]);
  const [provider, setProviderData] = useState([]);
  const [ProviderId, setProvider] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, SetPassword] = useState('');





  const columns = [
    { title: 'Name', dataIndex: 'customerName', key: 'customerName' },
    { title: 'Last Name', dataIndex: 'LastName', key: 'LastName' },
    { title: 'Phone Number', dataIndex: 'Number', key: 'Number' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
    { title: 'Status', dataIndex: 'status', key: 'status' },


  ];

  const { Meta } = Card;
  const [complaints, setComplaints] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await fetch('http://localhost:3000/GetProviders');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setProviderData( jsonData.providers);
                setIsLoading(false)
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

fetchData()
 },[]);
  useEffect(() => {
    const fetchDataUsers = async () => {
      try{
          const response = await fetch('http://localhost:3000/Users');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.users);
                setIsLoading(false)
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

          fetchDataUsers()
  },[]);

  const uuid = uuidv4(); // Generate a UUID

  const savaData = async () =>{
    const data = {Id:uuid,ServiceProviderId:ProviderId,First_Name:FirstName,Last_Name:LastName,email:Email,phoneNumber:phoneNumber,password:Password, role:'SERVICE PROVIDER'}
    try{
    let result = fetch('http://localhost:3000/Auth',{

        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      });
      result = (await result).json();
      console.warn(result);
    }
    catch(e){
      console.error(e);
    }
}
  const datas = data.map ((users, index) => ({
    Id: users.ID,
    customerName: users.First_Name,
    LastName: users.Last_Name,
    Email: users.Email,
    Number: users.PhoneNumber,
    status: users.Role,

    key: 'index'
  }))
  const handleOk = () => {
    setVisible(false);
    savaData();

  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };
  const loadData=()=>{
    if(isLoading){
      return <Loading/>
    }
  return (
    <div style={{marginTop:0}}>
      <Sidebar/>
      <Cards/>
    <h2  style={{marginLeft:250, marginTop:50}}>View All Users</h2>
    <span className='short-text' style={{marginLeft:250}}>View Users below</span>
    <Button style={{marginLeft:20, backgroundColor:'#87A922'}} onClick={showModal} >Add a service provider Employee</Button>

    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={datas} columns={columns} />
    <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add New Service Provider Employee"
      >
        <p>Fill in the fields below</p>
        <Form
      name="basic"
      initialValues={{ remember: true }}
      style={{ width: 500, alignItems:'center', marginTop:0}}
    >
      <Form.Item
        label="Service Provider:"
        name="Service provider"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >


        <Select defaultValue="Choose Provider" style={{width:250}} onChange={text=>setProvider(text)} >
    { provider.map(item => ( <Option value={item.Id} key={item.Id}>{item.Name}</Option>
    ))}
      </Select>
      </Form.Item>
      <Form.Item
        label="First Name:"
        name="FirstName"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}} onChange={(text)=>setFirstName(text.target.value)} />
      </Form.Item>
      <Form.Item
        label="Last Name:"
        name="LastName"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
      </Form.Item>
      <Form.Item
        label="ID Number:"
        name="ID"
        rules={[{ required: false, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}} onChange={(text)=>setLastName(text.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Phone Number:"
        name="number"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}} onChange={(text)=>setPhoneNumber(text.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Email Address:"
        name="username"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}} onChange={(text)=>setEmail(text.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Set Temporary Password:"
        name="Pass"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input type="password" style={{width:250}} onChange={(text)=>SetPassword(text.target.value)}/>
      </Form.Item>

      </Form>
      </Modal>
</div>
  )
  }
return (

  <div >
  {loadData()}
</div>
)
}

export default App;