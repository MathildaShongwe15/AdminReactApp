import { Card} from 'antd';
import '../src/App.css'
import React from 'react';

 function Cards() {

  const { Meta } = Card;
  return (
    <div style={{marginTop:-20, flexDirection:'row',display:'flex', marginRight:-1200}}>
     <Card style={{ width: 300, marginLeft:250, marginTop:100, height:100}}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>10</span> <span style={{ fontSize: 14 }}>Service Providers</span></div>}
        description="Number of service providers."
      />
    </Card>
    <Card style={{ width: 300, marginLeft:50,marginTop:100, height:100}}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>30</span> <span style={{ fontSize: 14 }}>Services</span></div>}
        description="Number of Services."
      />
    </Card>
    <Card style={{ width: 300,marginLeft:30,marginTop:100, height:100 }}>
      <Meta
        title={<div><span style={{ fontSize: 24 }}>150</span> <span style={{ fontSize: 14 }}>Users</span></div>}
        description="Number of users."
      />
    </Card> 


</div>
  )
}

export default Cards;