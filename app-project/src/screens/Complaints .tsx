import { useEffect, useState } from 'react'
import { Button, Card,Modal,Table, Tag, } from 'antd';
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
      },],
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
      {
        text: 'Closed',
        value: 'Closed',
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
        title="User info"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {/* render whatever you want based on your record */}
        <p>{record?.title} complaint :{record?.description} </p>
        <Button onClick={() => navigate('/Users')}>Send Complaint to Service provider</Button>
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