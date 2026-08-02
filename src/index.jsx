import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from  "react-router-dom"
import './index.css';
import Home from "./pages/home";
import About from "./pages/about";
import Vans from "./pages/vans";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element= {<About />}/>
      <Route path="/vans" element= {<Vans />} />
     </Routes>
    </BrowserRouter>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);