import React from "react";
import centerModel from "../assets/centerModel.png";
import topRight from "../assets/topRightVector.png";
import "./future.css";

function Future() {
  return (
    <div className="future_container">
      <div className="future_content">
        <h2>
          Trust <span>the</span>
        </h2>
        <h2>Future</h2>
      </div>
      <div className="future_img">
        <img src={centerModel} alt="" />
      </div>
      <div className="future_card">
        <div className="card_people">
          <div className="inner_people">
            <h2>730K</h2>
            <img src={topRight} alt="" />
          </div>
          <h3 className="para">People Trusted <br /> Now it's you</h3>
        </div>
        <div className="joinBtn">
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Future;
