import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../../Register'
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

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

