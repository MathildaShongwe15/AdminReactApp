import { useState } from 'react'
import { Button, Card,Table, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';

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
    <div style={{marginTop:0}}>
      <Cards/>
    <h2  style={{marginLeft:250, marginTop:50}}>Manage Complaints or Compliments</h2>
    <span className='short-text' style={{marginLeft:250}}>Manage Complaints below</span>

    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={complaints} columns={columns} />

</div>
  )

}

export default App;