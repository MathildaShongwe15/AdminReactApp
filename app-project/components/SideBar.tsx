import { useState } from 'react'
import { Breadcrumb, Layout } from 'antd';
import '../components/css/sidebar.css'
import MenuList from '../components/Menu';
import React from 'react';

 function Sidebar() {

 const {Header,Sider} = Layout;

  return (
 <Layout >
  <Sider className="sidebar" collapsible collapsed={false}>
      <MenuList/>
    </Sider>
 </Layout>

  );
}

export default Sidebar;