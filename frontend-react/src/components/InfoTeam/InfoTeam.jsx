import React, { useEffect, useState } from "react";
import "./InfoTeam.css";
import { dataCountries } from "../../data/dataCountries.jsx";
import { dataMessages } from "../../data/dataMessages.jsx";

export default function InfoTeam({ dataCountries, isHolder, setOpenSwap }) {
  const rows = [];
  for (let i = 0; i < dataCountries.etoiles; i++) {
    rows.push(" ⭐️ ");
  }
  const messagesCleaned = dataMessages.map((wave) => {
    return {
      address: wave[0],
      timestamp: new Date(wave[2] * 1000),
      message: wave[1],
    };
  });
  if (!isHolder) {
    console.log("Pas bien");
  }

  console.log(messagesCleaned);
  return (
    <div className="mainInfoTeam">
      <div className="lineInfoTeam">
        <div className="firstColumnInfoTeam">
          <img
            src={dataCountries.photo}
            alt={"Photo onTheFILEd of the " + dataCountries.name + " team"}
          />
        </div>
        <div className="secondColumnInfoTeam">
          <div>{dataCountries.logo + " " + dataCountries.name}</div>
          <div className="numbersInfoTeam">
            <div>
              <div>N. of fans</div>
              <div>{dataCountries.nombreFans}</div>
            </div>
            <div>
              <div>TVL</div>
              <div>{dataCountries.TVL + "$"}</div>
            </div>
            <div>
              <div>can win</div>
              <div>{"x" + dataCountries.ratio.toFixed(2)}</div>
            </div>
          </div>
          {isHolder ? (
            <button>
              {"🐥 Share your support to the " +
                dataCountries.name +
                " team on Twitter 🐥"}
            </button>
          ) : (
            <button onClick={() => setOpenSwap(true)}>
              {"Bet on " + dataCountries.name + "!"}
            </button>
          )}
          <div>{rows.map((e) => e)}</div> {/* Étoiles */}
          <div id="gradientTeam1" style={{}} />
          <div id="gradientTeam2" style={{}} />
          <div id="gradientTeam3" style={{}} />
        </div>
      </div>
      <div className="descriptionInfoTeam">{dataCountries.description}</div>
      <div className="divsMessages">
        <div className="sendMessage">
          <input
            type="text"
            placeholder="Write something for your team!"
          ></input>
          <button>Send</button>
        </div>
        <div className="goldenBook">
          {messagesCleaned.map(({ address, message, timestamp }) => (
            <div className="messageBook">
              <div className="contentMessage">{message}</div>
              <div className="addressMessage">{"from " + address}</div>
              <div className="dateMessage">{timestamp.toString()}</div>
            </div>
          ))}
        </div>
        {!isHolder ? (
          <div className="griseMessages" id="toGrise">
            <div>
              Messages are not available for you. Please join a team first with
              the button *Bet on France* above, and you will access this chat.
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
