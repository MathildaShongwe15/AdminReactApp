
import { Button } from 'antd';
import './App.css'
import Routing from './Routes/routing'
import React from 'react';
import { BrowserRouter, Link,  } from 'react-router-dom';
import {AuthProvider} from '../Context/AuthContext';

 function App() {

  return (

      <AuthProvider >
            <Routing/>
      </AuthProvider>


  )

}

export default App;