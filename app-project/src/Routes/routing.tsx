import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import RegisterProvider from '../screens/RegisterProvider'
import ManageProvider from '../screens/ManageProviders'
import Complaints from '../screens/Complaints '
import ResetPassword from '../screens/ResetPassword'
import Home from '../screens/Login';
import React from 'react';

export default function Routing() {
    return (
        <Routes>
          <Route path="/" element={<Home />}>      </Route>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/RegisterProvider" element={<RegisterProvider />}></Route>
          <Route path="/ManageProvider" element={<ManageProvider />}></Route>
          <Route path="/Complaints" element={<Complaints />}></Route>
          <Route path="/ResetPassword" element={<ResetPassword />}></Route>

        </Routes>
    );
  }

