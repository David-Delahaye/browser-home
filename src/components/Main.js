import React from "react";
import ReactDOM from "react-dom";

export default function Main({ quote, open, toggleButton }) {
  console.log(quote);
  return (
    <div className="main-display">
      <div className="quote">{open ? "" : quote}</div>
      <div className="greeting">Good Morning, Its currently</div>
      <div className="time">
        11:39 <span className="timezone">BST</span>
      </div>

      <div className="location">IN BLACKPOOL,UK</div>
      <button onClick={toggleButton} className="overlay-button">
        {open ? "Less V" : "More ^"}
      </button>
    </div>
  );
}
