import React, { useRef } from "react";
import "./style.scss";
import { useState } from "react";
import useValidation from "../../useValidation";
import img1 from "../../assets/image/room_single.jpg";
import img2 from "../../assets/image/room_double.jpg";
import img3 from "../../assets/image/room_deluxe.jpg";
import RoomBlock from "../../component/rooms";


export default function Room() {
  const [roomobj, setRoomobj] = useState([
    {
      id: 1,
      img: img1,
      h3: "Single Room",
      sp: "From $99",
      p1: "Single bed",
      p2: "15m2",
      i1: "icon-bathtub",
      i2: "icon-television",
      i3: "icon-connection",
    },
    {
      id: 2,
      img: img2,
      h3: "Double Room",
      sp: "From $149",
      p1: "Queen-size bed",
      p2: "25m2",
      i1: "icon-bathtub",
      i2: "icon-television",
      i3: "icon-connection",
      i4: "icon-phone",
    },
    {
      id: 3,
      img: img3,
      h3: "Deluxe Room",
      sp: "From $199",
      p1: "King-size bed",
      p2: "40m2",
      i1: "icon-bathtub",
      i2: "icon-television",
      i3: "icon-connection",
      i4: "icon-phone",
      i5: "icon-cutlery",
      i6: "icon-glass",
    },
  ]);
  const [error, validate] = useValidation();
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  let DateRef3 = useRef();
  let DateRef4 = useRef();

  const handleDate = (e) => {
    setDate(e.target.value);
    validate(e.target.value, "date");
  };
  const handleDate2 = (e) => {
    setDate2(e.target.value);
    validate(e.target.value, "date");
  };
  function fu() {
    if (date >= date2) {
      DateRef4.current.style.border = "3px solid red";
     
    }
  }
  return (
    <section className="room " id="room">
      <h4>Rooms</h4>
      <br />
      <p>
        Make yourself at home is our slogan. We offer the best beds in the
        industry. Sleep well and rest well.
      </p>
      <br />

      <div className="register_room">
        <div className="inp_block">
          <span className="icon-calendar"></span>
          <label>Check In</label>
          <br />
          <input ref={DateRef3} type="date" value={date} onChange={handleDate} />
        </div>
        <div className="inp_block">
          <span className="icon-accessibility"></span>
          <label>Adults</label>
          <br />
          <input type="number" max="6" />
        </div>
        <div className="inp_block">
          <span className="icon-calendar"></span>
          <label>Check In</label>
          <br />
          <input ref={DateRef4} type="date" value={date2} onChange={handleDate2} />
        </div>
        <div className="inp_block">
          <span className="icon-child"></span>
          <label>Kids</label>
          <br />
          <input type="number" />
        </div>
        <div>
          <span className="icon-search"> Search</span>
          <br />
          <button
        
            onClick={() => {
              if (error) {
                DateRef3.current.style.border = "3px solid red";
                DateRef4.current.style.border = "3px solid red";
              } else {
                DateRef3.current.style.border = "";
                DateRef4.current.style.border = "";
              }
              fu();
            }}
          >
            search
          </button>
        </div>
      </div>

      <div className="block">
        {roomobj.map((el) => (
          <RoomBlock key={el.id} item={el} />
        ))}
      </div>
    </section>
  );
}
