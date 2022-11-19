import "./SelectCountry.css";
import { dataCountries } from "../../data/dataCountries.jsx";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

export default function SelectCountry() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  function updateColors(first) {
    let debSent = "radial-gradient(50% 50% at 50% 50%, ";
    let endSent = " 0%, rgba(255, 0, 0, 0) 100%)";
    document.getElementById("gradient1").style.background =
      debSent + first[0] + endSent;
    document.getElementById("gradient2").style.background =
      debSent + first[1] + endSent;
    document.getElementById("gradient3").style.background =
      debSent + first[2] + endSent;
  }

  function updateActiveCountry(name) {
    navigate("/" + name);
  }

  return (
    <div className="mainCentered">
      <h2 className="radiantBluePurple">Select the winning team</h2>
      <div className="mainSelectWinning">
        {dataCountries.map(({ name, logo, color, e }) => (
          <button
            className="logoSelectWinning"
            id={name}
            onClick={(e) => updateActiveCountry(name)}
            onMouseEnter={(e) => updateColors(color)}
            key={e}
          >
            {logo}
          </button>
        ))}
      </div>
      <div id="gradient1" style={{ transition: "2s" }} />
      <div id="gradient2" style={{ transition: "2s" }} />
      <div id="gradient3" style={{ transition: "2s" }} />
    </div>
  );
}
