import { useEffect, useState } from 'react'
import { Button,Input,Modal,Table } from 'antd';
import React from 'react';
import Cards from '../../components/Cards'
import Sidebar from '../../components/SideBar';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/loading';
 function App() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [Id, setId] = useState('');
  const [type, setType] = useState('');
  const [typePost, setTypePost] = useState('');
  const [descriptionPost, setDescriptionPost] = useState('');

  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchDataServices = async () => {
      try{
          const response = await fetch('http://localhost:3000/AllServices');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.services);
                setIsLoading(false)
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

          fetchDataServices()
  },[]);
  const DeleteService = async () => {

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
     const UpdateService = async () => {
      const data1 = {Type:type,Description:description}

      await fetch(`http://localhost:3000/ServiceUpdate/${Id}`,{
       method:'PUT',
       headers:{
           'Content-Type':'application/json',
       },
       body: JSON.stringify(data1)
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


       const RegisterService = async () =>{

        await fetch('https://mutt-one-calf.ngrok-free.app/ServiceCreate',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
              Description:descriptionPost,
              Type:typePost
            })
            })
            .then(response => {
              if(!response.ok){
                throw new Error('Network response not ok')
              }

              console.log("response is okay", response)
              return response.json();
            })
            .catch(err => console.log(err))
    };
  const datas = data.map ((service, index) => ({
    Id:service.ID,
    name: service.Type,
    description: service.Description,
    key: 'index'
  }))

  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button style={{marginLeft:20}} onClick={showModals}>Edit</Button>

          <Button style={{marginLeft:20, backgroundColor:'#C40C0C'}} onClick={showModal}>Delete</Button>
        </span>
      ),
    },
  ];
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const showModals = () => {
    setVisible2(true);
  };
  const showModalService = () => {
    setVisible3(true);
  };
  const handleOk = () => {
    DeleteService();
    setVisible(false);
  };
  const handleOk1 = () => {
    UpdateService();

    setVisible2(false);
  };
  const handleOk3 = () => {
    RegisterService();

    setVisible3(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const handleCancel1 = () => {
    setVisible2(false);

  };
  const handleCancel3= () => {
    setVisible3(false);

  };

  const handleOnClick = (record:any) =>{
  return{
    onClick: (event: any) => { setId(record.Id)
      setId(record.Id);
      setType(record.name);
      setDescription(record.description);
    }

  }
}

const loadData=()=>{
  if(isLoading){
    return <Loading/>
  }
  return (

    <div  className="service-cntr" style={{height:800}}>
      <Sidebar/>
    <Cards/>
    <h2 style={{marginLeft:250, marginTop:50 }}>Manage Services</h2>
    <span className='short-text' style={{marginLeft:250}}>Manage your Services below</span>
    <Button style={{marginLeft:20, backgroundColor:'#87A922'}} onClick={showModalService}>Add a service</Button>

    {data ? (
     <Table style={{marginLeft:250, width:1000, marginTop:20}} dataSource={datas} columns={columns} onRow={handleOnClick}/>):
     ( <p>Loading data...</p>)}
     <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Delete Service"
      >
        <p> Are you sure you want to delete this service?</p>
      </Modal>
      <Modal
        visible={visible2}
        onOk={handleOk1}
        onCancel={handleCancel1}
        title={ "Update Service Type: " + type }
      >
        <p> Edit details below</p>
        <Input placeholder={"Service Name"} onChange={text => setType(text.target.value)}   />
        <Input placeholder={"Service Description"}   style={{marginTop:15}} onChange={text => setDescription(text.target.value)} />

      </Modal>
      <Modal
        visible={visible3}
        onOk={handleOk3}
        onCancel={handleCancel3}
        title={ "Add Service Type: " }
      >
        <Input placeholder={"Service Name"} onChange={text => setTypePost(text.target.value)}   />
        <Input placeholder={"Service Description"}   style={{marginTop:15}} onChange={text => setDescriptionPost(text.target.value)} />

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