import { useState } from 'react'
import { Layout } from 'antd';
import '../components/css/Menu.css'
import {Menu} from 'antd'
 import React from 'react';
import MenuItem from 'antd/es/menu/MenuItem';

 function App() {


  return (
 <Menu theme='dark' mode='inline' className='menu-bar' >
    <MenuItem key='home' icon={''} style={{marginTop:50}}>Home</MenuItem>
    <Menu.SubMenu key='subtasks' title='subTasks' >
    <MenuItem key='stats' >Stats 1</MenuItem>
    <MenuItem key='stats'>Stats 2</MenuItem>
    <MenuItem key='stats'>Stats 3</MenuItem>
    </Menu.SubMenu>
    <MenuItem key='dashboard' >Dashboard</MenuItem>
    <MenuItem key='employees'>Manage Employees</MenuItem>
    <MenuItem key='stats' >Stats</MenuItem>
    <MenuItem key='stats' >Settings</MenuItem>
    <MenuItem key='stats' >Logout</MenuItem>

    </Menu>

  );
}

export default App;