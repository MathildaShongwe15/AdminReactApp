import { useState } from 'react'
import { Layout } from 'antd';

import MenuList from '../components/Menu';
import React from 'react';

 function customHeader() {

 const {Header,Sider} = Layout;

  return (
 <Layout>

  <Sider className="sidebar">
      <MenuList/>
    </Sider>
 </Layout>


  );
}

export default customHeader;