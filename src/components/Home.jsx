import React from "react";
import "./style.css";
import logo from "../assests/logo.png";
import call from "../assests/call.png";
import main from "../assests/main.PNG";
import badge from "../assests/badge.GIF";
import dot from "../assests/dot.GIF";

const Home = () => {
  return (
    <div>
      <nav className="top-nav">
        <p>America’s #1 Subsidy Newsletter for Seniors </p>
      </nav>
      <div className="second-div">
        <img src={logo} alt="" className="logo" />
        <img src={call} alt="" className="call-now" />
      </div>
      <div className="main-div">
        <img src={badge} alt="" />
        <p className="main-title">
          Final Call For Seniors To Claim <br />
          Their <span>$9000 Food Allowance Card</span> <br />
          Before 9 P.M. Tonight!
        </p>
        <img src={main} alt="" className="main-img" />
      </div>
      <div className="place-main">
        <div className="place">
          <p>PLACE FOR REVIEW WIDGET</p>
        </div>
      </div>
      <div className="main-lower">
        <div className="lower-box">
          <p className="top">
            Americans over 65 years old can claim the{" "}
            <span>2024 Food Allowance Card that gives you $900.</span>
          </p>{" "}
          <p className="mid">
            Americans can use the funds to fully cover their Groceries,
            Medicines, etc. at Walmart and thousands of other participating
            stores!
          </p>
          <p className="bottom">
            If you have not yet claimed your monthly allowance then answer the
            questions above and once approved you will have{" "}
            <span>
              {" "}
              your $900 Food Allowance Card mailed to you within a few days
              ready for use!
            </span>
          </p>
        </div>
      </div>
      <div className="btn-main">
        <p>CLAIM YOURS NOW</p>
      </div>
      <div className="footer">
        <img src={dot} alt="" className="gif" />
        <p className="txt">
          OVER <span className="green">9,328</span> SENIORS HAVE CLAIMED THEIR
          FOOD ALLOWANCE CARD IN{" "}
          <span className="underline">LAST 60 MINUTES</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
