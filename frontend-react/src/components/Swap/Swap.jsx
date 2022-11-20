import React, { useEffect, useState } from "react";
import "./Swap.css";

import wheel from "../../assets/wheel.svg";
import filecoin from "../../assets/filecoinLogo.png";

export default function Swap({ setIsSwap }) {
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
          <img src={filecoin} alt="Logo filecoin" />
        </div>

        <div></div>
        <button>Support your team!</button>
      </div>
    </div>
  );
}
