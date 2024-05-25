import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
import logo from "../assets/Group 8763.png";
import hero from "../assets/Frame 9064.png";
import "./style.css";
import GroupImage from "../assets/Group 9188.png";
import Card from "./Card";
import MainSection from "./MainSection";
import Achievement from "./Achievment";

function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <a href="#" className="icon">
            <FaEnvelope />
          </a>
          <div className="logo">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="social-icons">
            <a href="#" className="icon">
              <FaTelegramPlane />
            </a>
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a href="#" className="icon">
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className="main">
          {/* Left side section */}
          <div className="content-group">
            <div className="content">
              <h1 className="content-txt">Future</h1>
              <FiArrowDownRight className="arrow-icon" />
            </div>
            <h1 className="content-txt2">of Launch</h1>
            <div className="button-group">
              <button className="button">Join Now</button>
              <button className="button1">How to Join?</button>
            </div>
          </div>

          {/* Right side section */}
          <div className="hero-img">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="group-img">
        <img src={GroupImage} alt="" />
      </div>
      {/* card component  */}
      <Card />
      {/* main section  */}
      <MainSection />
      {/* Achievment section  */}
      <Achievement />
    </>
  );
}

export default Header;
