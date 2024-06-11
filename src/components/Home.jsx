import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import logo from "../assests/logo.png";
import call from "../assests/shadow.png";
import main from "../assests/main.PNG";
import main2 from "../assests/main2.png";
import badge from "../assests/badge.GIF";
import hand from "../assests/hand.GIF";
import one from "../assests/one.PNG";
import two from "../assests/two.PNG";
import three from "../assests/three.PNG";
import four from "../assests/four.PNG";
import barish from "../assests/baarish.GIF";

const Home = () => {
  const [quiz, setQuiz] = useState("1. Are you over the age of 64?");
  const [yes, setYes] = useState("YES");
  const [no, setNo] = useState("NO");
  const [count, setCount] = useState(1);
  const [eligible, setEligible] = useState(null);
  const [slide, setSlide] = useState("");
  const [congratulations, SetCongratulations] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [step, setStep] = useState("process");
  const [ifYes, setIfYes] = useState(null);

  const images = [one, two, three, four];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  const handleNo = () => {
    setSlide("slide-left");
    setTimeout(() => {
      if (count === 1) {
        setQuiz("2. Do you live in the United States?");
        setYes("YES");
        setNo("NO");
      } else {
        setEligible(false);
      }
    }, 500);
  };

  if (eligible === true) {
    setTimeout(() => {
      SetCongratulations(false);
    }, 2000);
  }

  const handleYes = () => {
    setSlide("slide-left");
    setTimeout(() => {
      if (count === 1) {
        setQuiz("2. Do you live in the United States?");
        setYes("YES");
        setNo("NO");
        setCount(2);
      } else if (count === 2) {
        setQuiz("3. Are you enrolled in Medicare Part A OR B");
        setYes("YES");
        setNo("NO");
        setCount(3);
      } else if (count === 3) {
        setCount(4);
        setIfYes(true);
        setStep("Reviewing Your Answers...");
      }
      setSlide("slide-mid");
    }, 10);
    setTimeout(() => {
      setSlide("slide-right");
    }, 100);
  };

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");
        if (ifYes) {
          setEligible(true);
        }
      }, 1500);
    }
  };
  const quizRef = useRef(null);

  const scrollToQuiz = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };
  useEffect(() => {
    stepProcess();
  }, [ifYes, step]);

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

  const getDotLeftPosition = () => {
    switch (count) {
      case 1:
        return "10%";
      case 2:
        return "40%";
      case 3:
        return "70%";
      case 4:
        return "96%";
      default:
        return "0%";
    }
  };

  return (
    <div>
      <nav className="top-nav">
        <p>America’s #1 Newsletter for Seniors </p>
      </nav>
      <div className="second-div">
        <img src={logo} alt="" className="logo" />
        <img src={call} alt="" className="call-now" />
      </div>
      {eligible === null && step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        ""
      )}
      {eligible === true && congratulations === true && (
        <div className="baarish">
          <img src={barish} alt="" />
        </div>
      )}
      {eligible === null && step === "process" && (
        <div className="main-div">
          <img src={badge} alt="" />
          <p className="main-title">
            Americans on Medicare May Be Eligible For Up To{" "}
            <span>$900 Grocery & Food Allowance </span> &nbsp;in 2024 Advantage
            Plan!
          </p>
          <img src={main} alt="" className="main-img" />
        </div>
      )}
      {eligible === true && step === "completed" && (
        <div className="cong-top">
          <div className="border">CONGRATULATIONS, YOU QUALIFY!</div>
          <div className="bottom-cong" style={{ marginTop: "0" }}>
            <p className="bottom-cong-txt">
              MAKE A QUICK CALL TO CLAIM YOUR <span>FOOD ALLOWANCE CARD!</span>
            </p>
            <p className="bottom-spot">
              Spots Remaining: <span>4</span>
            </p>
            <p className="tap-to-call">TAP BELOW TO CALL</p>
            <a href="tel:+18446720874" style={{ textDecoration: "none" }}>
              <div
                className="quiz-yes"
                style={{ textAlign: "center", padding: "25px" }}
              >
                CALL (844) 672-0874
                <img className="hand-congo" src={hand} alt="" />
              </div>
            </a>
            <p className="below">We Have Reserved Your Spot</p>
            <p className="bottom-below">
              Due to high call volume, your official agent is waiting for only 3
              minutes, then your spot will not be reserved.
            </p>
          </div>
        </div>
      )}
      {eligible === null && step === "process" && (
        <div className="quiz">
          <div className={`quiz-main ${slide}`}>
            <div className="quiz-top">
              <p>
                ANSWER THE QUESTIONS BELOW TO CLAIM YOUR{" "}
                <span>$900 FOOD ALLOWANCE CARD:</span>
              </p>
            </div>
            <div className="quiz-loader">
              <div
                className="inner-loader"
                style={{ width: getLoaderWidth() }}
              ></div>
              <div
                className="loader-dot"
                style={{ left: getDotLeftPosition() }}
              ></div>
            </div>
            <div className="quiz-ques">{quiz}</div>
            <div className="quiz-yes" onClick={handleYes}>
              {yes}
              <img className="hand" src={hand} alt="" />
            </div>
            <div className="quiz-no" onClick={handleNo}>
              {no}
            </div>
            <div className="footer" style={{ textAlign: "start" }}>
              {/* <span class="ping-container">
                <span class="ping">
                  <span class="pingball"></span>
                </span>
              </span> */}
              {/* <p className="txt">
                OVER <span className="green">9,328</span> SENIORS HAVE CLAIMED
                THEIR FOOD ALLOWANCE CARD IN{" "}
                <span className="underline">LAST 60 MINUTES</span>
              </p> */}
            </div>
          </div>
        </div>
      )}
      {eligible === true && <img src={main2} alt="" className="main-img" />}

      {eligible === true && (
        <div className="review">
          {/* <div className="first">
            <span class="ping-container">
              <span class="ping">
                <span class="pingball"></span>
              </span>
            </span>
            <p>
              OVER <span>9,328</span> SENIORS HAVE CLAIMED THEIR FOOD ALLOWANCE
              CARD IN{" "}
              <span style={{ textDecoration: "underline", color: "#fff" }}>
                LAST 60 MINUTES
              </span>
            </p>
          </div> */}
          <div className="second">
            <span class="ping-container">
              <span class="ping">
                <span class="pingball"></span>
              </span>
            </span>
            <p>
              THESE $900 CAN BE SPENT ON GROCERY, GAS, ANY UTILITY BILL, REST
              AND <span>AT MORE THAN 1000+ STORES</span> LIKE WALMART, TARGET,
              ETC NATIONWIDE.
            </p>
          </div>
          <div className="first">
            <span class="ping-container">
              <span class="ping">
                <span class="pingball"></span>
              </span>
            </span>
            <p>
              OFFICIAL HOTLINE TO CLAIM THIS BENEFIT WILL CLOSE AT{" "}
              <span>9 P.M., 17TH JULY, 2024.</span>
            </p>
          </div>
        </div>
      )}
      {eligible === true && (
        <div className="senior">SEE WHAT SENIORS HAVE TO SAY:</div>
      )}
      {eligible === true && (
        <div className="carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Img ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>
      )}
      {eligible === true && step === "process" && (
        <div className="carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Img ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>
      )}
      {eligible === null && step === "process" && (
        <div className="carousel">
          <img
            src={images[currentImageIndex]}
            alt={`Img ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>
      )}
      {/* <div className="place-main">

        
        <div className="place">
          <p>PLACE FOR REVIEW WIDGET</p>
        </div>
      </div> */}

      {eligible === null && step === "process" && (
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
      )}
      {eligible === null && step === "process" && (
        <div className="btn-main" onClick={scrollToQuiz}>
          <p>CLAIM YOURS NOW</p>
        </div>
      )}
      {eligible === null && step === "process" && (
        <div className="footer" style={{ padding: "0px 50px" }}>
          {/* <span class="ping-container">
            <span class="ping">
              <span class="pingball"></span>
            </span>
          </span> */}
          {/* <p className="txt">
            OVER <span className="green">9,328</span> SENIORS HAVE CLAIMED THEIR
            FOOD ALLOWANCE CARD IN{" "}
            <span className="underline">LAST 60 MINUTES</span>
          </p> */}
        </div>
      )}
      {eligible === true && (
        <div className="bottom-cong">
          <p className="bottom-cong-txt">
            MAKE A QUICK CALL TO CLAIM YOUR <span>FOOD ALLOWANCE CARD!</span>
          </p>
          <p className="bottom-spot">
            Spots Remaining: <span>4</span>
          </p>
          <p className="tap-to-call">TAP BELOW TO CALL</p>
          <div
            className="quiz-yes"
            style={{ textAlign: "center", padding: "29px" }}
          >
            CALL (844) 372-213
            <img className="hand" src={hand} alt="" />
          </div>
          <p className="below">We Have Reserved Your Spot</p>
          <p className="bottom-below">
            Due to high call volume, your official agent is waiting for only 3
            minutes, then your spot will not be reserved.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
