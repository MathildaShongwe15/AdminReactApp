import { useEffect, useState } from 'react'
import { Button, Card,Flex,Form,Input,Modal,Select, Upload, message } from 'antd';
import '../App.css'
import uuidv4  from 'react-uuid';

import React from 'react';
import { useNavigate } from 'react-router-dom';


 function App() {
  const navigate = useNavigate();
  const uuid = uuidv4(); // Generate a UUID

  const [fileList, setFileList] = useState([]);
  const [Name, setName] = useState('');
  const [Id, setId] = useState('');

  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [ServiceFee, setServiceFee] = useState(0);
  const [data, setData] = useState([]);

  const success = () => {
    Modal.success({
      content:'You have successfully added a service provider!'


    });
  };
  const clearAllFields =()=>{
    setEmail('')
    setPhoneNumber('');
    setFileList([]);
    setName('')


  }
  useEffect(() => {
    const fetchRequests = async () => {
      try{
          const response = await fetch('http://localhost:3000/AllServices');

                if(!response.ok){
                  throw new Error('Network response not ok')
                }
                const jsonData = await response.json();
                setData( jsonData.services);
                console.log("response is okay", jsonData);
            }
            catch(error){
              console.error('Error fetching Data', error);
            }
          }

          fetchRequests();
  },[ ]);


  const postServiceRequest = async () =>{
   await fetch('http://localhost:3000/CreateProviders',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(
          {
            Id: uuid,
            ServiceId:Id,
            Name: Name,
            Email: Email,
            PhoneNumber: PhoneNumber,
            ServiceFee: ServiceFee
          })
        })
        .then(response => {
          if(!response.ok){
            throw new Error('Network response not ok'),
            console.log(response)
          }
          console.log("response is okay", response)
          return response.json();
        })
        success();
        }
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
    beforeUpload: (file:any) => {
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
    <div className="main-provider">
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
        name="provider"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:25}}
      >
        <Input onChange={(text) =>setName(text.target.value)} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:85,marginTop:30}}
      >
        <Input onChange={(text)=>setEmail(text.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone number"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:25,marginTop:30}}
      >
        <Input onChange={(text)=>setPhoneNumber(text.target.value)} />
      </Form.Item>
      <Form.Item
        label="Service Type"
        name="service"
        rules={[{ required: true, message: '*Required' }]}
        style={{marginLeft:40, marginTop:10}}
      >

      <Select defaultValue="choose service" onChange={text=>setId(text)}>
      { data.map(item => (
      <Option key={item.ID} value={item.ID}>{item.Type}</Option>
      ))}
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

      <Form.Item style={{maxWidth:550, marginLeft:10}} >
        <Button  htmlType="submit" onClick={postServiceRequest} >
          Save
        </Button>

      </Form.Item>
<Form.Item style={{maxWidth:550, marginLeft:20}}>
  <Button onClick={()=>navigate('/Home')}  htmlType="button" type={'primary'}  >
    Back
  </Button>
</Form.Item>


</div>


    </Form>

</div>
</div>
  );
}

export default App;