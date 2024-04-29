import { useState } from 'react'
import { Button, Card,Flex,Form,Input,Select,Typography } from 'antd';
import '../App.css'

import React from 'react';

 function App() {

  return (
    <div  className='container'>

    <h2>Add a new Service Provider</h2>


    <Form
      name="basic"
      initialValues={{ remember: true }}
      style={{ width: 400, alignItems:'center'}}
    >
      <Form.Item
        label="Service Provider:"
        name="username"
        rules={[{ required: true, message: 'Please input your service provider name!' }]}
      >
        <Input style={{marginLeft:20}}/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input style={{marginLeft:25}}/>
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone number"
        rules={[{ required: true, message: 'Please input your phone numebr!' }]}
      >
        <Input  style={{marginLeft:25}}/>
      </Form.Item>
      <Form.Item
        label="Service Type"
        name="service"
        rules={[{ required: true, message: 'Please input your service type!' }]}
      >
      <Select defaultValue="Option1" style={{ width: 250 }}>
      <Option value="Option1">Towing</Option>
      <Option value="Option2">Jump Start</Option>
      <Option value="Option3">Flat Tyre</Option>
    </Select>
      </Form.Item>
<div style={{flexDirection:'row', display:'flex'}}>
      <Form.Item style={{maxWidth:550, marginLeft:10}}>
        <Button type="primary" htmlType="submit" >
          Save
        </Button>

      </Form.Item>

<Form.Item style={{maxWidth:550, marginLeft:20}}>
  <Button type="primary" htmlType="submit" >
    Save and Add another
  </Button>
</Form.Item>
<Form.Item style={{maxWidth:550, marginLeft:20}}>
  <Button type="primary" htmlType="button"  >
    cancel
  </Button>
</Form.Item>
</div>
    </Form>

</div>
  );
}

export default App;