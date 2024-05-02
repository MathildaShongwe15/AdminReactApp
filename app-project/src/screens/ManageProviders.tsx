import { useEffect, useState } from 'react'
import { Button,Modal,Table } from 'antd';
import React from 'react';
import Cards from '../../components/Cards'
import Sidebar from '../../components/SideBar';
import { Link, useNavigate } from 'react-router-dom';
 function App() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {

            await fetch('http://localhost:3000/GetProviders',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },})
                .then(response => {
                  if(!response.ok){
                    throw new Error('Network response not ok')
                  }

                  console.log("response is okay", response)
                  return  response.json();
                })
                .then(async data => setData(data))
                .catch(err => console.log(err))
        };
        fetchData();
        console.log(data)
  }, []);

  const dataSource = [
    {
      key: '1',
      name: "data.providers[0].Name",
      age: 'Towing',
      address:"data.providers[0].Email",
      number:"data.providers[0].PhoneNumber",
    },
    {
      key: '2',
      name: "data.providers[1].Name",
      age: 28,
      address: "data.providers[1].Email",
      number:"data.providers[1].PhoneNumber",

    },
    {
      key: '3',
      name:  "data.providers[2].Name",
      age: "data.providers[2].Services.Type",
      address: "data.providers[2].Email",
      number:"data.providers[1].PhoneNumber",

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
          <Button style={{marginLeft:20}} onClick={() => navigate('/Complaints')}>Edit</Button>

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

    <div  className="service-cntr" style={{height:800}}>
        {/* <Sidebar/> */}
    <Cards/>
    <h2 style={{marginLeft:250, marginTop:50 }}>Manage Service Providers</h2>
    <span className='short-text' style={{marginLeft:250}}>Manage Service Providers below</span>

    {data ? (
     <Table style={{marginLeft:250, width:1000, marginTop:20}} dataSource={dataSource} columns={columns} />):
     ( <p>Loading data...</p>)}
     <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Delete Service Provider"
      >
        <p> Are you sure you want to delete this item?</p>
      </Modal>
      <a href="" onClick={() => navigate('/RegisterProvider')}>Navigate to register Provider</a>

</div>
  )

}

export default App;