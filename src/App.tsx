import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

