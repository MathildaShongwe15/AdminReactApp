import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../screens/Login'
export default function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Register />}>

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

