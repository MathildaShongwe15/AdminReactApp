import { Card} from 'antd';
import '../src/App.css'
import React, { useEffect, useState } from 'react';

 function Cards() {

  const [data, setData] = useState(0);
  const [servcies, setServices] = useState(0);
  const [users, setUsers] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try{
          const response = await fetch('http://localhost:3000/GetProviders');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.providers.length);
                console.log("!!!!!!!!!!!", data)


                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

fetchData()
 },[]);
 useEffect(() => {
  const fetchDataServices = async () => {
    try{
        const response = await fetch('http://localhost:3000/AllServices');

              if(!response.ok){
                throw new Error('Network response not ok')
              }
              const jsonData = await response.json();
              setServices( jsonData.services.length);
              console.log("!!!!!!!!!!!", servcies)


              console.log("response is okay", jsonData);
          }
          catch(error){
            console.error('Error fetching Data', error);
          }
        }

        fetchDataServices()
},[]);

useEffect(() => {
  const fetchDataUsers = async () => {
    try{
        const response = await fetch('http://localhost:3000/Users');

              if(!response.ok){
                throw new Error('Network response not ok')
              }
              const jsonData = await response.json();
              setUsers( jsonData.users.length);
              console.log("!!!!!!!!!!!", users)


              console.log("response is okay", jsonData);
          }
          catch(error){
            console.error('Error fetching Data', error);
          }
        }

        fetchDataUsers()
},[]);
  const { Meta } = Card;
  return (
    <div className="main-cards" style={{marginTop:-20, flexDirection:'row',display:'flex', marginRight:-1200}}>
     <Card style={{ width: 300, marginLeft:250, marginTop:50, height:100,backgroundColor:'#EEF1FF'}}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>{data}</span> <span style={{ fontSize: 14 }}>Service Providers</span></div>}
        description="Number of service providers."
      />
    </Card>
    <Card style={{ width: 300, marginLeft:50,marginTop:50, height:100,backgroundColor:'#EEF1FF'}}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>{servcies}</span> <span style={{ fontSize: 14 }}>Services</span></div>}
        description="Number of Services."
      />
    </Card>
    <Card style={{ width: 300,marginLeft:30,marginTop:50, height:100,backgroundColor:'#EEF1FF' }}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>{users}</span> <span style={{ fontSize: 14 }}>Users</span></div>}
        description="Number of users."
      />
    </Card>


</div>
  )
}

export default Cards;