import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function Header({s,setS}) {
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
              onClick={() => {
                Myref.current.style.display = "";
              }}
            >
              {" "}
              <span className="icon-location-hotel" />
              <h3>Home</h3>{" "}
            </NavLink>
            <a href="#room" className="menu_item" ref={Myref}>
              Rooms
            </a>
            <NavLink
              className="menu_item"
              to="/about"
              onClick={() => {
                Myref.current.style.display = "none";
              }}
            >
              Abouth
            </NavLink>
            <NavLink
              to="contact"
              className="menu_item"
              onClick={() => {
                Myref.current.style.display = "none";
              }}
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
