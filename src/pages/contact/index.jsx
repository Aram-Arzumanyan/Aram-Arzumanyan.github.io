import React, { useRef, useState } from "react";
import useValidation from "../../useValidation";
import "./style.scss";

export default function Contact() {
  const [error, validate] = useValidation();
  const [email, setEmail] = useState("");

  const handleMaile = (e) => {
    setEmail(e.target.value);
    validate(e.target.value, "email");
  };
  let InpRef=useRef();
  let InpRef2=useRef()
  return (
    <section className="Contact">
      <div className="black_bar">
        <div className="title">
          <h3> Get the best offers first!</h3>
          <p> Join our newsletter.</p>
        </div>
        <div className="form">
          <label>E-mail</label>
          <br />
          
          <input ref={InpRef} type="email" placeholder="Your Email addres" value={email} onChange={handleMaile} />
          <br />
          <button onClick={()=>{
            if(error){
              InpRef.current.style.border='3px solid red'
            }else{
              InpRef.current.style.border='3px solid black'
            }
          }}>Subscrib</button>
        </div>
      </div>
   <div className="titl_contact">
      <h3>Contact</h3>
      <br />
      <p>If you have any questions, do not hesitate to ask them.</p>
      <br />
      <p className="icon-location2 i"> Chicago, US</p>
      <p className="icon-phone i"> Phone: +00 151515</p>
      <p className="icon-envelop i"> Email: mail@mail.com</p>
      </div>
      <div className="inp_form">
        <input type="text" placeholder="Name" />
        <input ref={InpRef2} type="email" placeholder="Email" onChange={handleMaile} />
        <input type="text" placeholder="Message" />
        <button onClick={()=>{
 if(error){
  InpRef2.current.style.border='3px solid red'
}else{
  InpRef2.current.style.border='3px solid black'
}
}}
        >Send Message</button>
      </div>
    </section>
  );
}
