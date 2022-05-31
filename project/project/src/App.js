import React from "react";
import Navbar from "./navbar/navbar"
import Intro from "./Page/Intro";
import Main from "./Page/Main";
import Shop from "./Page/muahang";
import Footer from "./footer/footer";
import "./navbar.css"
import {Routes,Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      
       < Navbar/>
       
       <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/:type" element={<Main/>} />
        <Route path="/:type/:page" element={<Main/>} />
        <Route path="/:type/:page/:id" element={<Shop/>} />
         </Routes>
      <Footer/>
       
    </div>
  );
}

export default App;