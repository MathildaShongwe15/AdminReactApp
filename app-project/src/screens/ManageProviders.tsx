import { useState } from 'react'
import { Button,Modal,Table } from 'antd';
import './App.css'
import React from 'react';

 function App() {
  const [data, setData] = useState([]);

  const dataSource = [
    {
      key: '1',
      name: 'Vision Towing',
      age: 'Towing',
      address: 'New York',
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 28,
      address: 'Los Angeles',
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 28,
      address: 'Los Angeles',
    },
  ];
  const columns = [
    {
      title: 'Service Provider Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Service Type',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button
           style={{marginLeft:20}}
          >Edit</Button>
          <Button style={{marginLeft:20, backgroundColor:'#C40C0C'}} onClick={showModal}>Delete</Button>
        </span>
      ),
    },
  ];
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Perform actions on OK button click
    setVisible(false);
  };

  const handleCancel = () => {
    // Perform actions on Cancel button click
    setVisible(false);
  };

  return (
    <div>
    <h2 style={{marginLeft:400}}>Manage Service Providers</h2>
     <Table style={{marginLeft:400}} dataSource={dataSource} columns={columns} />
     <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Delete Service Provider"
      >
        <p> Are you sure you want to delete this item?</p>
      </Modal>
</div>
  )

}

export default App;