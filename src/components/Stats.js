import React from "react";
import ReactDOM from "react-dom";

export default function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-bar">
        <div className="stat">
          <h2 className="stat-head">current timezone</h2>
          <p className="stat-body">Europe/London</p>
        </div>
        <div className="stat">
          <h2 className="stat-head">day of the year</h2>
          <p className="stat-body">296</p>
        </div>
      </div>
      <div className="stats-bar">
        <div className="stat">
          <h2 className="stat-head">day of the week</h2>
          <p className="stat-body">5</p>
        </div>
        <div className="stat">
          <h2 className="stat-head">week number</h2>
          <p className="stat-body">45</p>
        </div>
      </div>
    </div>
  );
}
