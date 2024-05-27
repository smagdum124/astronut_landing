import React from "react";
import vector from "../assets/Group 9222.png";
import pose4 from "../assets/pose9 1.png";

function Collaborate() {
  return (
    <div className="collaborate_container">
      <div className="collab_img">
        <img className="vector" src={vector} alt="" />
        <h3>Grab Mail</h3>
        <img className="pose4" src={pose4} alt="" />
      </div>
      <div className="collab_form">
        <h2>Let's Collaborate</h2>
        <form action="">
          <div className="input_row">
            <div className="input_group">
              <label htmlFor="name">NAME</label>
              <input id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="input_group">
              <label htmlFor="subject">SUBJECT</label>
              <input id="subject" type="text" placeholder="Choose Subject" />
            </div>
          </div>
          <div className="input_row">
            <div className="input_group">
              <label htmlFor="email">BEHALF OF</label>
              <input id="" type="email" placeholder="Personal" />
            </div>
            <div className="input_group">
              <label htmlFor="phone">EMAIL</label>
              <input id="phone" type="text" placeholder="Email Address"/>
            </div>
            <div className="input_group">
              <label htmlFor="company">BEHALF OF</label>
              <input id="company" type="text"placeholder="Personal" />
            </div>
          </div>
          <div className="input_row">
            <div className="input_group wide">
              <label htmlFor="message">MESSAGE</label>
              <input id="message" type="text" placeholder="Start Typing here "/>
            </div>
            <div className="input_group button_group">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Collaborate;
