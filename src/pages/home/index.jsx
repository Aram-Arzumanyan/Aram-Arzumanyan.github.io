import React, { useRef, useState } from "react";
import "./style.scss";
import hotel from "../../assets/image/hotel.jpg";
import useValidation from "../../useValidation";

export default function Home() {
  const [error, validate] = useValidation();
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
    validate(e.target.value, "date");
  };
  const handleDate2 = (e) => {
    setDate2(e.target.value);
    validate(e.target.value, "date");
  };

  let DateRef = useRef();
  let DateRef2 = useRef();

  function fu() {
    if (date>=date2) {
      DateRef2.current.style.border = "3px solid red";
    }
    
  }

  
  return (
    <section className="hotel" style={{ backgroundImage: `url('${hotel}')` }}>
      <div className="block">
        <div className="hotel_name">
          <span className="icon-location-hotel"></span>
          <h3>Hotel Name</h3>
        </div>
        <div className="register_hotel">
          <form className="regis_form">
            <span className="icon-calendar"></span>
            <label>Check In</label>
            <input
              type={"date"}
              ref={DateRef}
              value={date}
              onChange={handleDate}
            />
            <br />
            <br />
            <span className="icon-accessibility"></span> <label>Adults</label>
            <input type="number" max="6" />
          </form>
          <form className="regis_form">
            <span className="icon-calendar"></span>
            <label>Check In</label>
            <input
              type="date"
              ref={DateRef2}
              value={date2}
              onChange={handleDate2}
            />
            <br />
            <br />
            <span className="icon-child"></span>
            <label>Kids</label>
            <input type="number" />
          </form>
        </div>
        <button
          className="search"
          onClick={() => {
           
            if (error) {
              DateRef.current.style.border = "3px solid red";
              DateRef2.current.style.border = "3px solid red";
            } else {
              DateRef.current.style.border = "";
              DateRef2.current.style.border = "";
            }
            fu()
          }}
        >
          <span className="icon-search"></span>search availability
        </button>
      </div>
    </section>
  );
}
