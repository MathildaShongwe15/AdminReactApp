import { useState } from 'react'
import { Button, Card,Table, } from 'antd';
import './App.css'

import React from 'react';

 function App() {
  const [data, setData] = useState([]);

  const columns = [
    { title: 'Customer Name', dataIndex: 'customerName', key: 'customerName' },
    { title: 'Service Provider', dataIndex: 'serviceProvider', key: 'serviceProvider' },
    { title: 'Complaint/Compliments Description', dataIndex: 'description', key: 'description' },
    { title: 'Date Submitted', dataIndex: 'submittedDate', key: 'submittedDate' },

  ];

  const { Meta } = Card;
  const [complaints, setComplaints] = useState([]);


  return (
    <div style={{marginTop:-250}}>
    <h2  style={{marginLeft:500}}>Manage Complaints or Compliments</h2>
    <Table style={{marginLeft:500}}dataSource={complaints} columns={columns} />

</div>
  )

}

export default App;