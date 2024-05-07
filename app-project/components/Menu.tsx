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
 <Menu theme='dark' mode="horizontal" className='menu-bar' style={{width:1500, height:100, marginLeft:-50}}>
    <Menu.Item key='logo'><img className='img-logo' style={{width:90, height:90, marginTop:6}} src={'../src/assets/logo4.png'}/>
</Menu.Item>

    <Menu.Item key='home'  style={{ marginTop:12}} ><Link to="/Home"></Link> Dashboard</Menu.Item>
    <Menu.SubMenu key='subtasks' title='Manage' style={{ marginTop:12}} >
    <MenuItem key='Services' ><Link to="/ManageServices"></Link>Services</MenuItem>
    <MenuItem key='Complaints' ><Link to="/Complaints"></Link>Complaints/Compliments</MenuItem>
    <MenuItem key='Service Providers'><Link to="/ManageProvider"></Link>Service Providers</MenuItem>
    </Menu.SubMenu>
    <MenuItem key='profile' style={{ marginTop:12}} ><Link to="/Profile"></Link>Profile</MenuItem>
    <MenuItem key='users' style={{ marginTop:12}} ><Link to="/Users"></Link>Users</MenuItem>

    <MenuItem key='logout'style={{ marginTop:12}}  onClick={onLogout} ><Link to="/"></Link>Logout</MenuItem>

    </Menu>

  );
}

export default App;