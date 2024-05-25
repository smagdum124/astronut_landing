import { FiArrowDownRight } from "react-icons/fi";
import pose2 from "../assets/pose9 1.png";
import "./style.css";

const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="achievement-content">
        <h2 className="title">We're Not new,</h2>
      </div>
      <div className="achievement-main">
        <div className="achievement-img">
          <img
            src={pose2}
            alt="Animated Character"
            className="animated-image"
          />
        </div>
      </div>
    </div>
    // <div className="achievement-container">
    //   <div className="achievement-content">
    //     <div className="achievement-main">
    //       <div className="text-and-image-container">
    //         <h2 className="title">We're Not new,</h2>
    //         <img src={pose2} alt="Animated Character" className="animated-image" />
    //       </div>
    //       <div className="text-container">
    //         <h2 className="subtitle">Already above</h2>
    //         <h2 className="highlight">
    //           <span className="italic">the</span> Surface
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="achievement-footer">
    //       <button className="know-more-button">
    //         <span className="icon-container">
    //           <FiArrowDownRight />
    //         </span>
    //         <span>Know more</span>
    //       </button>
    //       <div className="stats-container">
    //         <div className="stat">
    //           <p className="stat-number">24K</p>
    //           <div className="stat-text">
    //             <p>Projects</p>
    //             <p>Launched</p>
    //           </div>
    //         </div>
    //         <div className="stat">
    //           <p className="stat-number">2.3M</p>
    //           <div className="stat-text">
    //             <p>Members in</p>
    //             <p>Community</p>
    //           </div>
    //         </div>
    //         <button className="icon-button">
    //           <FiArrowDownRight />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Achievement;
