import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.scss";

export default function Header({s,setS}) {
   let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      Myref.current.style.display = "flex";
    } else {
      Myref.current.style.display = "none";
    }
  },[location.pathname]);
  let Myref = useRef();
  let navRef=useRef();
  function fu() {
    setS(!s)
  }

  return (
    <section className="G-container" id="header">
   <span className="icon-menu3 icon" onClick={(e)=>{
    fu()
    e.stopPropagation()
    
   }}></span>
      <div ref={navRef} className={`nav ${s?'navbar':'nav'}`} onClick={(e)=>{
e.stopPropagation()
      }}>
        <div className="content">
          <div className="menu">
            <NavLink
              to="/"
              className="icon_div"
             
            >
              
              <span className="icon-location-hotel" />
              <h3>Home</h3>{" "}
            </NavLink>
            <a href="#room" className="menu_item" ref={Myref}>
              Rooms
            </a>
            <NavLink
              className="menu_item"
              to="/about"
             
            >
              Abouth
            </NavLink>
            <NavLink
              to="contact"
              className="menu_item"
             
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="second_content">
          <h3>Book Now</h3>
        </div>
      </div>
    </section>
  );
}
