import { useState } from 'react'
import { Button, Card,Flex,Form,Input,Modal,Select,Table,Typography } from 'antd';
import './App.css'
import Sidebar from '../components/SideBar';
import MainContent from '../components/MainContent';
import MenuList from '../components/Menu';
import React from 'react';

 function App() {
  const [data, setData] = useState([]);

  const columns = [
    { title: 'Customer Name', dataIndex: 'customerName', key: 'customerName' },
    { title: 'Service Provider', dataIndex: 'serviceProvider', key: 'serviceProvider' },
    { title: 'Complaint/Compliments Description', dataIndex: 'description', key: 'description' },
    { title: 'Date Submitted', dataIndex: 'submittedDate', key: 'submittedDate' },
    // Add more columns as needed
  ];

  const { Meta } = Card;
  const [complaints, setComplaints] = useState([]);


  return (
    <div style={{flexDirection:'row', display:'flex' , marginTop:-250}}>

    {/* <Card style={{ width: 300, marginLeft:100}}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>10</span> <span style={{ fontSize: 14 }}>Service Providers</span></div>}
        description="Number of service providers."
      />
    </Card>
    <Card style={{ width: 300, marginLeft:50}}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>30</span> <span style={{ fontSize: 14 }}>Services</span></div>}
        description="Number of Services."
      />
    </Card>
    <Card style={{ width: 300,marginLeft:50 }}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>150</span> <span style={{ fontSize: 14 }}>Users</span></div>}
        description="Number of users."
      />
    </Card> */}

    <Table style={{marginLeft:500}}dataSource={complaints} columns={columns} />

</div>
  )
    {/* <Sidebar/> */}

    {/* <Card>
      <Flex>
        <Flex>
          <Typography.Title level={2} >Create and sell</Typography.Title>
        </Flex>
      </Flex>
    </Card> */}





}

export default App;