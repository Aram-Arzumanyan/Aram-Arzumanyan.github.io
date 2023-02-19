import React from "react";
import "./style.scss";
import map from "../../assets/image/map.jpg";
import terre from "../../assets/image/terre.jpg";
import sanfran from "../../assets/image/sanfran.jpg";
import paris from "../../assets/image/paris.jpg";
import newyork from "../../assets/image/newyork.jpg";
import pisa from "../../assets/image/pisa.jpg";
export default function About() {
  return (
    <section className="section_about">
      <div className="about">
        <div className="info">
          <h3>About</h3>
          <br />
          <p>
            Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
          <br />
          <div>
            <span>We accept: </span>
            <span className="icon-credit-card"> </span>
            <span className="icon-cc-paypal"> </span>
            <span className="icon-cc-amex"> </span>
          </div>
        </div>
        <div className="map" style={{ backgroundImage: `url('${map}')` }}></div>
      </div>
      <div className="content">
        <p className="icon-location2"> 423 Some adr, Chicago, US</p>
        <p className="icon-phone"> Phone: +00 151515</p>
        <p className="icon-envelop "> Email: mail@mail.com</p>
      </div>

      <div className="bar">
        <span>i</span>{" "}
        <p>
          {" "}
          On demand, we can offer playstation, babycall, children care, dog
          equipment, etc.
        </p>
      </div>

      <div className="image_block">
        <div
          className="terre"
          style={{ backgroundImage: `url("${terre}")` }}
        ></div>
        <div className="wraper">
          <div className="wimag"  style={{ backgroundImage: `url("${paris}")` }}></div>
          <div className="wimag" style={{ backgroundImage: `url("${sanfran}")` }}></div>
          <div className="wimag" style={{ backgroundImage: `url("${newyork}")` }}></div>
          <div className="wimag" style={{ backgroundImage: `url("${pisa}")` }}></div>
        </div>
      </div>
    </section>
  );
}
