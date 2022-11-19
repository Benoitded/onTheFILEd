import React, { useEffect, useState } from "react";
import "./Bracket.css";
import {
  listMatchs,
  listMatchsSecond,
  listMatchsThird,
  listMatchsFourth,
} from "../../data/dataMatchs.jsx";

export default function Bracket() {
  return (
    <div className="mainCentered">
      <h2 className="radiantBluePurple">Braket</h2>
      <div className="mainBracket">
        <div className="firstLine">
          {listMatchs.map(({ teams, date }) => (
            <div className="divMatchLogo">
              {teams.map(({ name, logo }) => (
                <div className="divLogo" title={"Play with " + name}>
                  {logo}
                </div>
              ))}
              {date}
            </div>
          ))}
        </div>
        <div className="secondLine">
          {listMatchsSecond.map(({ teams, date }) => (
            <div className="divMatchLogo">
              {teams.map(({ name, logo }) => (
                <div className="divLogo" title={"Play with " + name}>
                  {logo}
                </div>
              ))}
              {date}
            </div>
          ))}
        </div>
        <div className="thirdLine">
          {listMatchsThird.map(({ teams, date }) => (
            <div className="divMatchLogo">
              {teams.map(({ name, logo }) => (
                <div className="divLogo" title={"Play with " + name}>
                  {logo}
                </div>
              ))}
              {date}
            </div>
          ))}
        </div>
        <div className="fourthLine">
          {listMatchsFourth.map(({ teams, date }) => (
            <div className="divMatchLogo">
              {teams.map(({ name, logo }) => (
                <div className="divLogo" title={"Play with " + name}>
                  {logo}
                </div>
              ))}
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
