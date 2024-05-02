import { useState } from 'react'
import { Layout} from 'antd';
import '../components/css/Menu.css'
import {Menu} from 'antd'
 import React from 'react';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link } from 'react-router-dom';

 function App() {


  return (
 <Menu theme='dark' mode='inline' className='menu-bar' >
    <Menu.Item key='home' icon={''} style={{marginTop:0}}>   Home</Menu.Item>
    <Menu.SubMenu key='subtasks' title='subTasks' >
    <MenuItem key='stats' >Stats 1</MenuItem>
    <MenuItem key='stats' >Stats 2</MenuItem>
    <MenuItem key='stats'>Stats 3</MenuItem>
    </Menu.SubMenu>
    <MenuItem key='dashboard' >Dashboard</MenuItem>
    <MenuItem key='employees'>Manage Providers</MenuItem>
    <MenuItem key='stats' >Manage Complaints</MenuItem>
    <MenuItem key='logout' >Logout</MenuItem>

    </Menu>

  );
}

export default App;