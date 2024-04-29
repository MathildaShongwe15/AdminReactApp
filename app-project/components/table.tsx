import { useState } from 'react'
import { Layout } from 'antd';
import '../components/css/table.css'
import React from 'react';

 function table() {

  return (

<div className='cntr'>

  <table id="requests">
    <tr>
      <th>Request Type</th>
      <th>Date</th>
      <th>Number of Requests</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>Towing</td>
      <td>14 May 2022</td>
      <td>180</td>
      <td><div className='badge'>Approved</div></td>
    </tr>
    <tr>
      <td>Flat Tyre</td>
      <td>14 May 2022</td>
      <td>2</td>
      <td><div className='badge-decline'>Decline</div></td>
    </tr>
    <tr>
      <td>Jump Start</td>
      <td>14 May 2022</td>
      <td>5</td>
      <td><div className='badge-pending'>Pending</div></td>
    </tr>
  </table>
</div>

  );
}

export default table;