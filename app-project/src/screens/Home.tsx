import { useEffect, useState } from 'react'
import { Button, Card,Flex,Form,Input,Modal,Progress,Select,Table, notification, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/loading';
import Sidebar from '../../components/SideBar';
import moment from 'moment';

 function App() {
    const [api, contextHolder] = notification.useNotification();
    const [record, setRecord] = useState('');

    const openNotification = () => {
      api.open({
        message: "record",
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',

      });
    }

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const columns = [
    { title: 'Request Date', dataIndex: 'date', key: 'date' },
    { title: 'Service Provider', dataIndex: 'provider', key: 'provider' },
    { title: 'Type', dataIndex: 'type', key: 'type', filters: [
        {
          text: 'Towing',
          value: 'Towing',
        },
        {
          text: 'Jump Start',
          value: 'Jump Start',
        },
        {
          text: 'Oil and water',
          value: 'Oil and water',
        },
        {
            text: 'Fuel',
            value: 'Fuel',
          },
          {
            text: 'Tyre Change',
            value: 'Tyre Change',
          },
    ],
        onFilter: (value:any, record:any) => record.type.indexOf(value) === 0,
        sorter: (a:any, b:any) => a.type.length - b.type.length,
        sortDirections: ['descend'] },
    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
    { title: 'Status', dataIndex: 'status', key: 'status' },

  ];




  useEffect(() => {
    const fetchRequests = async () => {
      try{
          const response = await fetch('http://localhost:3000/AllServiceRequests');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.requests);
                setIsLoading(false)
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

          fetchRequests()
  },[]);

  const handleOnClick = (record:any) =>{
    return{
      onClick: (event: any) => {
        openNotification(),
        setRecord(record);

      },

    }

  }
  const datas = data.map ((requests, index) => ({
    Id: requests.ID,
    provider: requests.ServiceProvider.Name,
    type: requests.Services.Type,
    name: requests.Users.First_Name + " " +requests.Users.Last_Name,
    Email: requests.Users.Email,
    Number: requests.Users.PhoneNumber,
    status: requests.Accepted,
    date:moment(requests.CreatedAt).format('MMMM Do YYYY, h:mm a'),
    key: 'index'
  }))

  const loadData=()=>{
    if(isLoading){
      return <Loading/>
    }
  return (
    <div style={{marginTop:0}}>
              {contextHolder}

      <Sidebar/>

      <Flex
    vertical
    gap="small"
    style={{
      width: 180, marginLeft:250, marginTop:20
    }}
  >
    <div style={{flexDirection:'row', display:'flex'}}>
      <Progress type="circle" percent={75} />
      </div>
      <p style={{width:400}}>Percentage of Requests Completed Today</p>

  </Flex>
      <Cards/>
    <h2  style={{marginLeft:250, marginTop:50}}>View Requests</h2>
    <span className='short-text' style={{marginLeft:250}}>View Users below</span>


    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={datas} columns={columns} onRow={handleOnClick} />

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