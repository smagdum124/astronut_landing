import pose2 from "../assets/pose9 1.png";
import "./style.css";
import rectangle from "../assets/Rectangle 4058.png";
import arrow from "../assets/Group 9268.png";
import know from "../assets/Group 9222.png";
const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="heading">
        <h2>We're Not new,</h2>
      </div>
      <div className="achievement-content">
        <div className="achievement-img">
          <img src={pose2} alt="" />
          <div className="know-more">
            <img style={{ width: "auto" }} src={know} alt="" />{" "}
            <span>Know more </span>
          </div>
        </div>
        <div className="achievement-text">
          <h2 className="achiev-txt2">Already above</h2>
          <h2>
            <span>the</span> <span className="highlight">Surface</span>
          </h2>
          <div className="image-container">
            <div className="image-with-text">
              <img src={rectangle} alt="" />
              <p>First Image Text</p>
            </div>
            <div className="image-with-text">
              <img src={rectangle} alt="" />
              <p>Second Image Text</p>
            </div>
            <img style={{ width: "11vw", height: "10vw" }} src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
