import React, { useEffect, useState } from "react";
import "./Headline.css";

export default function Headline({ currentAccount, chain, setChain }) {
  return (
    <main>
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
          <div>ici</div>
        </div>
      </div>
    </main>
  );
}
