import { useState } from "react";

import "./styles/global.css";

import Stats from "./components/Stats";
import Main from "./components/Main";

export default function App() {
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState("");

  const getQuotes = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    const quotes = await res.json();
    setQuote(`${quotes[0].text} - ${quotes[0].author}`);
  };
  getQuotes();

  const toggleButton = async () => {
    setOpen(!open);
    console.log("change");
  };

  return (
    <div className="site-wrapper">
      <div className="site-image" />
      <Main quote={quote} open={open} toggleButton={toggleButton} />
      <div className={`overlay ${open ? "active" : ""}`}>
        <Stats />
      </div>
    </div>
  );
}
