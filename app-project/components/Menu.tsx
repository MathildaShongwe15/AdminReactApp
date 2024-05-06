import { useState } from 'react'
import { Layout} from 'antd';
import '../components/css/Menu.css';
import {Menu } from 'antd';
 import React from 'react';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

 function App() {
  const navigate = useNavigate();

  const {onLogout} = useAuth();



  return (
 <Menu theme='dark' mode="horizontal" className='menu-bar' >
    <Menu.Item key='home'><Link to="/Home"></Link> Dashboard</Menu.Item>
    <Menu.SubMenu key='subtasks' title='Manage' >
    <MenuItem key='Services' ><Link to="/ManageServices"></Link>Services</MenuItem>
    <MenuItem key='Complaints' ><Link to="/Complaints"></Link>Complaints</MenuItem>
    <MenuItem key='Service Providers'><Link to="/ManageProvider"></Link>Service Providers</MenuItem>
    </Menu.SubMenu>
    <MenuItem key='employees'><Link to="/Profile"></Link>Profile</MenuItem>
    <MenuItem key='employees'><Link to="/Users"></Link>Users</MenuItem>

    <MenuItem key='logout' onClick={onLogout} ><Link to="/"></Link>Logout</MenuItem>

    </Menu>

  );
}

export default App;