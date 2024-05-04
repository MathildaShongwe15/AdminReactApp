import { useCallback, useEffect, useRef, useState } from 'react'
import { Button,Modal,Table } from 'antd';
import React from 'react';
import Cards from '../../components/Cards'
import Sidebar from '../../components/SideBar';
import { Link, useNavigate } from 'react-router-dom';
 function App() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [Id, setId] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await fetch('http://localhost:3000/GetProviders');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.providers);
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

fetchData()
 },[]);
 const UpdateProviders = async () => {
  // const data1 = {name:,Email:, PhoneNumber:, serviceType:,servicefee:}

  await fetch(`http://localhost:3000/UpdateProviderById/${Id}`,{
   method:'PUT',
   headers:{
       'Content-Type':'application/json',
   },
   body: JSON.stringify()
 })
 .then(response => {
     if(!response.ok){
       throw new Error('Network response not ok')
     }
     console.log("response is okay", response)
     return response.json();
   })
   .catch(err => console.log(err))

   }
 const DeleteProvider = async () => {

     await fetch(`http://localhost:3000/DeleteProviderById/${Id}`,{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json',
      },
    })
    .then(response => {
        if(!response.ok){
          throw new Error('Network response not ok')
        }
        console.log("response is okay", response)
        return response.json();
      })
      .catch(err => console.log(err))

      }

 const datas = data.map ((service, index) => ({
  Id: service.Id,
  name: service.Name,
  type: service.Services.Type,
  email: service.Email,
  number: service.PhoneNumber,
  key: 'index'
}))


  const columns = [
    {
      title: 'Service Provider Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Service Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'number',
      key: 'number',
    },

    {
      title: 'Action',
      key: 'action',
      render: () => (
        <span>
          <Button style={{marginLeft:20}} >Edit</Button>

          <Button style={{marginLeft:20, backgroundColor:'#C40C0C'}} onClick= {showModal} >Delete</Button>
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
    DeleteProvider();
    setVisible(false);

  };

  const handleCancel = () => {
    // Perform actions on Cancel button click
    setVisible(false);
  };
  const handleOnClick = (record:any) =>{
  return{
    onClick: (event: any) => { setId(record.Id)
      setId(record.Id);

    }

  }
}



  return (

    <div  className="service-cntr" style={{height:800}}>
      {/* <Sidebar/> */}
        {/* <Sidebar/> */}
    <Cards/>
    <h2 style={{marginLeft:250, marginTop:50 }}>Manage Service Providers</h2>
    <span className='short-text' style={{marginLeft:250}}>Manage Service Providers below</span>
     <Button style={{marginLeft:20, backgroundColor:'#87A922'}} onClick={() => navigate('/RegisterProvider')}>Add a service provider</Button>
     <Table style={{marginLeft:250, width:1000, marginTop:20}} dataSource={datas} columns={columns} onRow={handleOnClick}/>
     <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Delete Service Provider"
      >
        <p> Are you sure you want to delete this item?</p>
      </Modal>
      <a href="" onClick={() => navigate('/ManageServices')} >Navigate to register Provider</a>

</div>
  )

  }

export default App;