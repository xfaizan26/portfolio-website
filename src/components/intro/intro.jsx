import "./intro.css";
import { init } from "ityped";
import { useEffect } from "react";

export default function Intro() {


  useEffect(() => {
    init(document.querySelector(".fsa"), {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Safak Kocaoglu</h1>
          <h3>
            Freelance <span  className="fsa"></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}