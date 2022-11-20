import React, { useEffect, useState } from "react";
import "./Swap.css";

import wheel from "../../assets/wheel.svg";
import filecoin from "../../assets/filecoinLogo.png";

import abi from "./../../utils/OnTheFILEd.json";
import { ethers } from "ethers";

export default function Swap({ setIsSwap, country, currentAccount }) {
  const [priceEuro, setPriceEuro] = useState();
  const [numberReceived, setNumberReceived] = useState(0);
  const priceFILE = 4.37235;
  function updatePrice(e) {
    setNumberReceived(e.target.value);
    setPriceEuro(e.target.value * priceFILE);
  }
  function closeSwap() {
    console.log("gone");
    setIsSwap(false);
  }

  function doNothing(event) {
    event.stopPropagation();
  }
  //   console.log("currentAccount");
  //   console.log(currentAccount);

  const contractAddress = "0x9707c76133236872D039a8b9a18fCb14cb28c29C";
  const contractABI = abi.abi;
  const getTokens = async () => {
    try {
      const { ethereum } = window;
      var amount = `${100}` + "0".repeat(18);

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const waveTxn = await wavePortalContract.mint(currentAccount, 100);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mainSwap" onClick={closeSwap}>
      <div className="appSwap" onClick={(event) => doNothing(event)}>
        <div className="headerSwap">
          <div>Swap</div>
        </div>
        <div className="valueSwap">
          <input
            type="text"
            id="howManyToConvert"
            placeholder="0"
            onChange={(e) => updatePrice(e)}
          />
          <img src={filecoin} alt="Logo filecoin" />
          {priceEuro ? <div>{"~" + priceEuro + "$"}</div> : <div></div>}
          <div>Max</div>
        </div>
        <div className="valueSwap">
          <div>{numberReceived}</div>
          <div>{country}</div>
        </div>

        <div></div>
        <button onClick={getTokens}>Support your team!</button>
      </div>
    </div>
  );
}
