import { useEffect, useState } from 'react'
import { Button, Card,Form,Input,Modal,Select,Table, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/loading';
import Sidebar from '../../components/SideBar';

 function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

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

    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={datas} columns={columns} />
    <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add new service provider employee"
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
        <Select defaultValue="Option1" style={{width:250}} >
      <Option value="Option1">Vision Towing</Option>
      <Option value="Option2">Jump Start</Option>
      <Option value="Option3">Flat Tyre</Option>
      </Select>
      </Form.Item>
      <Form.Item
        label="First Name:"
        name="FirstName"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
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
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
      </Form.Item>
      <Form.Item
        label="Phone Number:"
        name="number"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
      </Form.Item>
      <Form.Item
        label="Email Address:"
        name="username"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
      </Form.Item>
      <Form.Item
        label="Set Temporary Password:"
        name="Pass"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
      </Form.Item>
      <Form.Item
        label="Confirm Temporary Password:"
        name="confirm"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:5}}
      >
        <Input style={{width:250}}/>
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