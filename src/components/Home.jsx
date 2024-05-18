import React, { useState } from "react";
import "./style.css";
import logo from "../assests/logo.png";
import call from "../assests/call.png";
import main from "../assests/main.PNG";
import badge from "../assests/badge.GIF";
import dot from "../assests/dot.GIF";
import hand from "../assests/hand.GIF";

const Home = () => {
  const [quiz, setQuiz] = useState("1. Are you over the age of 64?");
  const [yes, setYes] = useState("YES, I'M 65 OR OLDER");
  const [no, setNo] = useState("NO, I'M 64 OR YOUNGER");
  const [count, setCount] = useState(1);

  const handleNo = () => {
    setQuiz("2. Are you over the age of 70?");
    setYes("YES, I'M 70 OR OLDER");
    setNo("NO, I'M 70 OR YOUNGER");
  };

  const handleYes = () => {
    if (count === 1) {
      setQuiz("2. Are you over the age of 80?");
      setYes("YES, I'M 80 OR OLDER");
      setNo("NO, I'M 80 OR YOUNGER");
      setCount(2);
    } else if (count === 2) {
      setQuiz("3. Are you over the age of 90?");
      setYes("YES, I'M 90 OR OLDER");
      setNo("NO, I'M 90 OR YOUNGER");
      setCount(3);
    } else if (count === 3) {
      // Assuming you want to complete the quiz at count 4
      setCount(4);
    }
  };

  const getLoaderWidth = () => {
    switch (count) {
      case 1:
        return "10%";
      case 2:
        return "40%";
      case 3:
        return "70%";
      case 4:
        return "100%";
      default:
        return "0%";
    }
  };

  const getDotWidth = () => {
    switch (count) {
      case 1:
        return "60%";
      case 2:
        return "89%";
      case 3:
        return "95%";
      case 4:
        return "96%";
      default:
        return "0%";
    }
  };

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
      <div className="quiz">
        <div className="quiz-main">
          <div className="quiz-top">
            <p>
              ANSWER THE QUESTIONS BELOW TO CLAIM YOUR{" "}
              <span>$900 FOOD ALLOWANCE CARD:</span>
            </p>
          </div>
          <div className="quiz-loader" style={{ width: getLoaderWidth() }}>
            <div className="loader-dot" style={{ left: getDotWidth() }}></div>
          </div>
          <div className="quiz-ques">{quiz}</div>
          <div className="quiz-yes" onClick={handleYes}>
            {yes}
            <img className="hand" src={hand} alt="" />
          </div>
          <div className="quiz-no" onClick={handleNo}>
            {no}
          </div>
          <div className="footer">
            <img src={dot} alt="" className="gif" />
            <p className="txt">
              OVER <span className="green">9,328</span> SENIORS HAVE CLAIMED
              THEIR FOOD ALLOWANCE CARD IN{" "}
              <span className="underline">LAST 60 MINUTES</span>
            </p>
          </div>
        </div>
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
      <div className="footer" style={{ padding: "0px 50px" }}>
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
