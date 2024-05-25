import React from "react";
import cardBg from "../assets/Group 9218.png";
import Union from "../assets/Union.png";
import MaskGroup from "../assets/Mask group.png";
import MaskGroup1 from "../assets/Mask group (1).png";
import star from "../assets/Star 9.png"
import cube from "../assets/Group 9264.png"
import "./style.css";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-bg" src={cardBg} alt="" />
        <div className="inner-content">
          <img className="union-image" src={Union} alt="" />
          <h3>Native super-app + trading terminal</h3>
        </div>
      </div>
      <div className="card">
        <img className="card-bg" src={MaskGroup} alt="" />
        <div className="inner-content">
          <img className="union-image" src={star} alt="" />
          <h3>Premium User Experience</h3>
        </div>
      </div>
      <div className="card">
        <img className="card-bg" src={MaskGroup1} alt="" />
        <div className="inner-content">
          <img className="union-image" src={cube} alt="" />
          <h3>All new Perfectly Crafted Tools</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
