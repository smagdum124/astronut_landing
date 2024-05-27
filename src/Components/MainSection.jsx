import React from "react";
import mainImg from "../assets/Group 9181.png";

function MainSection() {
  return (
    <div className="main-container">
      <div className="main-img">
        <img src={mainImg} alt="" />
      </div>
      <div className="main-content">
        <div className="btn-group">
          <button className="activebtn">Engage</button>
          <button>Snapshot</button>
          <button>Lottery</button>
          <button>Contribution</button>
        </div>
        <div className="main-txt">
          <h2>Engage</h2>
          <span>Put all your idle coins to work.</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor
            perspiciatis ducimus, eius totam quo. Praesentium alias iure,
            doloremque consectetur ratione ea consequuntur dignissimos. Eos
            quaerat harum consectetur aspernatur! Facere..
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
