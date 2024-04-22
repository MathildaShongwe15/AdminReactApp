import { useState } from 'react'
import { Layout } from 'antd';
import './App.css'
import MenuList from '../components/Menu';
import React from 'react';

 function App() {

  return (

<div>
  <h3>Latest Requests</h3>
  <table>
    <tr>
      <th>Customer</th>
      <th>Date</th>
      <th>Service</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>14 May 2022</td>
      <td>Towing</td>
      <td><div className='badge'>Approved</div></td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>14 May 2022</td>
      <td>Towing</td>
      <td><div className='badge-decline'>Decline</div></td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>14 May 2022</td>
      <td>Towing</td>
      <td><div className='badge-pending'>Pending</div></td>
    </tr>
  </table>
</div>

  );
}

export default App;