import React, { useEffect, useState } from "react";
import "./Headline.css";

import { dataHeadline } from "../../data/dataHeadline.jsx";
import { dataCountries } from "../../data/dataCountries.jsx";

export default function Headline({ currentAccount, chain, setChain }) {
  console.log(dataCountries.filter((e) => e.name == "France")[0].logo);
  return (
    <div className="mainHeadLine">
      <div className="firstRawHeadline">
        <h1>
          He shoots,
          <br />
          he scores!
        </h1>
        <h4>Decentralized pronostic platform for the FIFA World Cup 2022</h4>
      </div>
      <div className="secondRawHeadline">
        {dataHeadline.map(({ title, player, competitor, date }) => (
          <div className="caseSecondRawHeadline">
            <div>{dataCountries.filter((e) => e.name == player.game).logo}</div>
            <h4>{title}</h4>
            <div>
              {player.name +
                " " +
                player.score +
                " - " +
                competitor.score +
                " " +
                competitor.name}
            </div>
            <div>{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
