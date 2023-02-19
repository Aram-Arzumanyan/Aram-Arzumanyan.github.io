import React from 'react';
import {  Routes, Route } from "react-router-dom";
import About from '../pages/abouth';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Room from '../pages/rooms';
export default function Routing() {
  return (
   
    <Routes>
        
        <Route path='/' element={[<Home/>,<Room/>]}/>;
        <Route path='/about' element={<About/>}/>;
        <Route path='/contact' element={<Contact/>}/>
        
    </Routes>
  )
}
