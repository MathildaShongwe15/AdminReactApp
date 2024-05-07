import { useEffect, useState } from 'react'
import { Button, Card,Input,Modal,Table, Tag, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';
import moment from 'moment';
import Sidebar from '../../components/SideBar';

 function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [record, setRecord] = useState('');
  const [status, setStatus] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const datas = data.map ((complaints, index) => ({
    Id: complaints.ID,
    provider: complaints.ServiceProvider.Name,
    name:complaints.User.First_Name + " "+ complaints.User.Last_Name,
    title: complaints.ComplaintTitle,
    description: complaints.ComplaintDescription,
    date: moment(complaints.CreatedAt).format('MMMM Do YYYY, h:mm a'),
    status:complaints.Status,
    key: 'index'
  }))

const handleOnClick = (record:any) =>{
  console.log("ID",record)

  return{
    onClick: (event: any) => { setId(record.Id)
      setRecord(record),
      setIsModalVisible(true);

    },

  }

}
console.log("IDEEEEE",id)

  const columns = [
    { title: 'Service Provider', dataIndex: 'provider', key: 'provider', filters: [
      {
        text: 'First HELP',
        value: 'First HELP',
      },
      {
        text: 'Vision Towing',
        value: 'Vision Towing',
      },
      {
        text: 'Juels Towing Service',
        value: 'Juels Towing Service',
      },
      {
        text: 'Shell',
        value: 'Shell',
      },
      {
        text: 'Precision Tow-in Service',
        value: 'Precision Tow-in Service',
      },
      {
        text: 'Engen',
        value: 'Engen',
      },

    ],
      onFilter: (value:any, record:any) => record.provider.indexOf(value) === 0,
      sorter: (a:any, b:any) => a.provider.length - b.provider.length,
      sortDirections: ['descend']
    },

    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Date Submitted', dataIndex: 'date', key: 'date' },

    { title: 'Complaint Title', dataIndex: 'title', key: 'title' },
    { title: 'Complaint/Compliments Description', dataIndex: 'description', key: 'description' },
    { title: 'Status', key: 'status' , dataIndex:'status',
    filters: [
      {
        text: 'Resolved',
        value: 'Resolved',
      },
      {
        text: 'In progress',
        value: 'In progress',
      },

    ],

    onFilter: (value:any, record:any) => record.status.indexOf(value) === 0,
    sorter: (a:any, b:any) => a.status.length - b.status.length,
    sortDirections: ['descend'],}

  ];
  useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await fetch('http://localhost:3000/GetAllComplaints');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.Complaints);
                setIsLoading(false)
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

fetchData()
 },[]);
 const updateComplaints = async () =>{
    const Id = await record?.Id;
  try{
          await fetch(`http://localhost:3000/UpdateComplaints/${Id}`,{
              method: 'PUT',
              headers:{
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(
               {
                status:status
              })
              }) .then(response => {
               if(!response.ok){
                 throw new Error('Network response not ok'),
                 console.log(response)
               }
               console.log("response is okay", response)
               return response.json();
             })

   }
   catch(err){
     console.error(err)
   }
   };
 const closeModal = () => {
  setIsModalVisible(false);
};

const loadData=()=>{
  if(isLoading){
    return <Loading/>
  }
  return (
    <div style={{marginTop:0}}>
      <Sidebar/>
      <Cards/>
    <h2  style={{marginLeft:250, marginTop:50}}>Manage Complaints or Compliments</h2>
    <span className='short-text' style={{marginLeft:250}}>Manage Complaints below</span>

    <Table style={{marginLeft:250, width:1000,marginTop:20}}dataSource={datas} columns={columns}  onRow={handleOnClick} />
    <Modal
        title="Update Status for Request"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <p>{record?.title} complaint :{record?.description} </p>
        <Input placeholder={record?.status} onChange={text => setStatus(text.target.value)}/>
        <Button  onClick={updateComplaints} style={{marginTop:10, width:470, backgroundColor:"#87A922"}}>Update status </Button>
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