import { useState } from 'react'
import { Button, Card,Table, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';

 function App() {
  const [data, setData] = useState([]);

  const columns = [
    { title: 'Name', dataIndex: 'customerName', key: 'customerName' },
    { title: 'Last Name', dataIndex: 'LastName', key: 'LastName' },
    { title: 'Phone Number', dataIndex: 'Number', key: 'Number' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },

  ];

  const { Meta } = Card;
  const [complaints, setComplaints] = useState([]);


  return (
    <div style={{marginTop:0}}>
      <Cards/>
    <h2  style={{marginLeft:250, marginTop:50}}>View All Users</h2>
    <span className='short-text' style={{marginLeft:250}}>View Users below</span>

    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={complaints} columns={columns} />

</div>
  )

}

export default App;