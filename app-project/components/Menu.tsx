import { useState } from 'react'
import { Layout } from 'antd';
import './Menu.css'
import {Menu} from 'antd'
 import React from 'react';
import MenuItem from 'antd/es/menu/MenuItem';
// import Sider from 'antd/es/layout/Sider';
 function App() {


  return (
 <Menu theme='light' mode='inline' className='menu-bar' >
    <MenuItem key='home' icon={''} style={{marginTop:350}}>Home</MenuItem>
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