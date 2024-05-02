import { useState } from 'react'
import { Button, Card,Flex,Form,Input,Select,Typography, Upload, message } from 'antd';
import '../App.css'

import React from 'react';

 function App() {
  const [fileList, setFileList] = useState([]);
  const handleUpload = (info:any) => {
    if (info.file.status === 'uploading') {
      message.info('Uploading...');
      return;
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} upload failed.`);
    }
  };
  const props = {
    name: 'file',
    action: 'https://your-upload-url.com',
    multiple: true,
    beforeUpload: (file) => {
      const isAllowed = [ 'file/pdf'].includes(file.type);
      if (!isAllowed) {
        message.error('You can only upload pdf files!');
        return false;
      }

      if (file.size > 1024 * 1024) {
        message.error('File size cannot exceed 1MB!');
        return false;
      }

      return true;
    },
    onChange: (info:any) => {
      const newFileList = info.fileList;
      setFileList(newFileList);
      handleUpload(info);
    },
  };
  return (
    <div  className='container-provider'>
    <img  className="img-providers" src={'../src/assets/Logo (2).png'}/>

    <h2>Register a new Service Provider</h2>


    <Form
      name="basic"
      initialValues={{ remember: true }}
      style={{ width: 500, alignItems:'center', marginTop:0}}
    >
      <Form.Item
        label="Service Provider:"
        name="username"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:25}}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:85,marginTop:30}}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone number"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:25,marginTop:30}}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        label="Service Type"
        name="service"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:40, marginTop:10}}
      >
      <Select defaultValue="Option1" >
      <Option value="Option1">Towing</Option>
      <Option value="Option2">Jump Start</Option>
      <Option value="Option3">Flat Tyre</Option>
    </Select>
      </Form.Item>
      <Form.Item
        label="Add licensing Documents"
        name="service"
        rules={[{ required: true, message: 'Please upload documents' }]}
        style={{marginLeft:40, marginTop:50}}
      >
      <Upload {...props} fileList={fileList}>
      <Button>Click to upload</Button>
    </Upload>
    </Form.Item>
<div style={{flexDirection:'row', display:'flex'}}>

      <Form.Item style={{maxWidth:550, marginLeft:10}}>
        <Button  htmlType="submit" >
          Save
        </Button>

      </Form.Item>

<Form.Item style={{maxWidth:550, marginLeft:20}}>
  <Button  htmlType="submit" >
    Save and Add another
  </Button>
</Form.Item>

</div>
<Form.Item style={{maxWidth:550, marginLeft:20}}>
  <Button  htmlType="button" style={{ backgroundColor:'#C40C0C'}}  >
    clear all fields
  </Button>
</Form.Item>

    </Form>

</div>
  );
}

export default App;