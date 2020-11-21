import { useState, useEffect } from "react";

import "./styles/global.css";

import Stats from "./components/Stats";
import Main from "./components/Main";

function useTime() {
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect((async) => {
    setTimeData();
    setLoading(false);
    setInterval(() => {
      setTimeData();
    }, 30000);

    async function setTimeData() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;

      const timeString = `${hours}:${minutes}`;
      let zone = date.getTimezoneOffset();
      if (zone > 0) zone = "+" + zone;
      if (zone === 0) zone = "";
      const timeZone = "GMT" + zone;
      let timeOfDay = "morning";
      if (hours < 6 || hours > 21) timeOfDay = "evening";
      if (hours > 12 && hours < 21) timeOfDay = "afternoon";
      let timePuppet = { timeOfDay, timeString, timeZone, date };
      setTime(timePuppet);
    }
  }, []);
  return [time, loading];
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [time, loading] = useTime();

  const getQuotes = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    const quotes = await res.json();
    const num = 3; //Math.floor(Math.random() * 200);
    setQuote(`${quotes[num].text} - ${quotes[num].author}`);
  };
  getQuotes();

  const toggleButton = async () => {
    setOpen(!open);
  };

  const imageLoad = async () => {
    console.log("loaded");
    setOpacity(1);
  };

  if (!loading) {
    return (
      <div className="site-wrapper">
        <img
          alt={time.timeOfDay}
          src={
            time.timeOfDay === "evening"
              ? "https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=100"
              : "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=100"
          }
          className="site-image"
          style={{ opacity: opacity }}
          onLoad={imageLoad}
        />
        <Main
          quote={quote}
          open={open}
          toggleButton={toggleButton}
          time={time}
        />
        <div
          className={`overlay ${open ? "active" : ""} ${
            time.timeOfDay === "evening" ? "dark" : ""
          }`}
        >
          <Stats time={time} />
        </div>
      </div>
    );
  }
  return "load";
}
