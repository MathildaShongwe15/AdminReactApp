import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../screens/ResetPassword';
import Dashboard from '../screens/Dashboard';
import RegisterProvider from '../screens/RegisterProvider'
import ManageProvider from '../screens/ManageProviders'
import ManageServices from '../screens/ManageServices'
import Users from '../screens/AllUsers'
import Complaints from '../screens/Complaints '
import Profile from '../screens/Profile'
import Home from '../screens/Home';
import ResetPassword from '../screens/ResetPassword'
import Login from '../screens/Login';
import React from 'react';
import { AuthProvider, useAuth } from "../../Context/AuthContext";

const checkAuth = ()=>{
    const{authState}:any = useAuth();

  if(!authState?.authenticated){
   return <Routes>
   <Route path="/login" element={<Login />}></Route>
   <Route path="/Register" element={<Register />}></Route>
   </Routes>

  }

  if(authState?.authenticated){
    return <Routes>
    <Route path="/RegisterProvider" element={<RegisterProvider />}></Route>
    <Route path="/ManageProvider" element={<ManageProvider />}></Route>
    <Route path="/Complaints" element={<Complaints />}></Route>
    <Route path="/ManageServices" element={<ManageServices />}></Route>
    <Route path="/Users" element={<Users />}></Route>
    <Route path="/Profile" element={<Profile />}></Route>
    <Route path="/Home" element={<Home />}></Route>


    </Routes>
}
}

export default function Routing() {
    return (
      <BrowserRouter>
      {checkAuth()}
      </BrowserRouter>

    );
  }

