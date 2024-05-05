import { useEffect, useState } from 'react'
import { Button, Card,Modal,Table, } from 'antd';
// import './App.css'

import React from 'react';
import Cards from '../../components/Cards';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';

 function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [record, setRecord] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const parsedDate = new Date();
  const navigate = useNavigate();

  const datas = data.map ((complaints, index) => ({
    Id: complaints.ID,

    title: complaints.ComplaintTitle,
    description: complaints.ComplaintDescription,
    date: complaints.CreatedAt,
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
    { title: 'Service Provider', dataIndex: 'provider', key: 'provider' },

    { title: 'Customer Name', dataIndex: 'name', key: 'name' },
    { title: 'Date Submitted', dataIndex: 'date', key: 'date' },

    { title: 'Complaint Title', dataIndex: 'title', key: 'title' },
    { title: 'Complaint/Compliments Description', dataIndex: 'description', key: 'description' },

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