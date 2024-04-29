import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Login';

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

