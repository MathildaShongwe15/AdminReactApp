import { useState } from 'react'
import { Layout } from 'antd';
import './App.css'
import MenuList from '../components/Menu';
import React from 'react';

 function App() {

 const {Header,Sider} = Layout;

  return (
 <Layout>
  <Sider className="sidebar">
      <MenuList/>
    </Sider>
 </Layout>


  );
}

export default App;