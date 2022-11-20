import React, { useEffect, useState } from "react";
import "./Explain.css";

import betOnYourTeam from "../../assets/betOnYourTeam.svg";
import getAToken from "../../assets/getAToken.svg";
import filecoin from "../../assets/filecoinLogo.png";
import DAO from "../../assets/DAO.svg";

export default function Explain({ setIsExplain, country }) {
  return (
    <div className="mainExplain">
      <div>
        <div>
          <img src={betOnYourTeam} alt="" />
        </div>
        <div>Bet on your team</div>
      </div>
      <div>
        <div>
          <img src={getAToken} alt="" />
        </div>
        <div>Get tokens of your team</div>
      </div>
      <div>
        <div>
          <img src={filecoin} alt="" />
        </div>
        <div>Earn profits</div>
      </div>
      <div>
        <div>
          <img src={DAO} alt="" />
        </div>
        <div>Join a community</div>
      </div>
    </div>
  );
}
