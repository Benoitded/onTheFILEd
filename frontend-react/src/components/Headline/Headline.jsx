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
            <h4>{title}</h4>
            <div className="dataHeadline">
              <div className="logoPays">
                <div>{player.logo}</div>
                <div>{player.name}</div>
              </div>
              <div className="scoreHeadline">3-3</div>
              <div className="logoPays">
                <div>{competitor.logo}</div>
                <div>{competitor.name}</div>
              </div>
            </div>
            <div className="dateHeadline">{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
