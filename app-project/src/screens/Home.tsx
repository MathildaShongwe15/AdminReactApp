import { useEffect, useState } from 'react'
import { Avatar, Button, Card,Flex,Form,Input,Modal,Progress,Select,Table, notification, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';
import Loading from '../../components/loading';
import Sidebar from '../../components/SideBar';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

 function App() {
    const [record, setRecord] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [pending, setPending] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

   const name =  localStorage.getItem("FirstName")
    const { Meta } = Card;

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

  ];

  const AcceptedRequests =()=>{
    let countTotal = data.length;
    let countAccepted = 0;
    let countPending = 0;

    data.forEach(element => {
       if(element.Accepted === true){
         countAccepted = countAccepted + 1
       }
       else{
        countPending = countPending + 1
       }
    });
    const perce = Math.round((countAccepted/countTotal)*100)
    const pending = Math.round((countPending/countTotal)*100)

    setPercentage(perce);
    setPending(pending)
    console.log("perc",percentage)
  }


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

          fetchRequests();
          AcceptedRequests();
  },[ AcceptedRequests]);
  const closeModal = () => {
    setIsModalVisible(false);

  };

  const handleOnClick = (record:any) =>{
    return{
      onClick: (event: any) => {
        setRecord(record);
        setIsModalVisible(true);

      },

    }

  }

  const TotalRequests =()=>{
     AcceptedRequests();
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

      <Sidebar/>

      <Flex
    vertical
    gap="small"
    style={{
      width:1000 , marginLeft:250, marginTop:20
    }}
  >

    <div style={{flexDirection:'row', display:'flex'}}>
    <Card style={{ width: 700, marginLeft:0, marginTop:50, height:150,backgroundColor:'#070F2B' }}>
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
        title={<div><span style={{ fontSize: 25, color:"#fff" }}>Welcome Back,</span> <span style={{ fontSize: 20, color:"#fff"}}>{name}</span></div>}
        description={<span style={{color:"#fff" }}>See your stats and manage</span>}
      />
    </Card>
    <div style={{flexDirection:'column', display:'flex'}}>

      <Progress type="circle" percent={percentage} style={{ marginLeft:105, marginTop:40}}/>
      <p style={{width:150, marginLeft:90, fontSize:12}}>Overall Completed Requests</p>

      </div>
      <div style={{flexDirection:'column', display:'flex'}}>
      <Progress type="circle" percent={pending}  style={{marginLeft:50,marginTop:40}} />
      <p style={{width:150, marginLeft:60, fontSize:12}}>Overall Pending Requests</p>

    </div>
      </div>

  </Flex>
      <Cards/>
    <h2  style={{marginLeft:250, marginTop:20}}>View Requests</h2>
    <span className='short-text' style={{marginLeft:250}}>View Users below</span>


    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={datas} columns={columns} onRow={handleOnClick} />
    <Modal
        title={record?.provider + " "+"Request status: " + record?.status}
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {/* render whatever you want based on your record */}
        <p><span style={{fontWeight:600}}>Requested by :</span>{record?.name} </p>
        <p> <span style={{fontWeight:600}}>Service Type :</span>{record?.type} </p>
        <Button type='primary' onClick={() => navigate('/Users')}>Ok</Button>
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