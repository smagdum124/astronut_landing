import { FiArrowDownRight } from "react-icons/fi";
import pose2 from "../assets/pose9 1.png";
import "./style.css";

const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="heading">
        <h2>We're Not new,</h2>
      </div>
      <div className="achievement-content">
        <div className="achievement-img">
          <img src={pose2} alt="" />
        </div>
        <div className="achievement-text">
          <h2 >Already above</h2>
          <h2 style={{color:"aqua"}} className="highlight"> 
            <span>the</span> Surface
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
