import React from "react";
import ReactDOM from "react-dom";

export default function Stats({ time }) {
  return (
    <div className="stats-container">
      <div
        className={`stats-bar ${time.timeOfDay === "evening" ? "dark" : ""}`}
      >
        <div className="stat">
          <h2 className="stat-head">current timezone</h2>
          <p className="stat-body">{time.timeZone}</p>
        </div>
        <div className="stat">
          <h2 className="stat-head">Day</h2>
          <p className="stat-body">{time.date.getDay() + 1}</p>
        </div>
      </div>
      <div className="stats-bar">
        <div className="stat">
          <h2 className="stat-head">Month</h2>
          <p className="stat-body">{time.date.getMonth() + 1}</p>
        </div>
        <div className="stat">
          <h2 className="stat-head">Year</h2>
          <p className="stat-body">{time.date.getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
