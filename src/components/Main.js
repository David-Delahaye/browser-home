import React from "react";
import ReactDOM from "react-dom";

export default function Main({ quote, open, toggleButton, time }) {
  return (
    <div className="main-display">
      <div className="quote">{open ? "" : quote}</div>
      <div className="greeting">Good {time.timeOfDay}, Its currently</div>
      <div className="time">
        {time.timeString}
        <span className="timezone">{time.timeZone}</span>
      </div>

      <div className="location">IN BLACKPOOL,UK</div>
      <button onClick={toggleButton} className="overlay-button">
        {open ? "Less V" : "More ^"}
      </button>
    </div>
  );
}
