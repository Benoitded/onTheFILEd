import TableComponent from "../../components/TableComponent/TableComponent.jsx";
import React, { useEffect, useState } from "react";
import {dataCountries} from '../../data/dataCountries.jsx'

import Headline from "../../components/Headline/Headline.jsx";
import SelectCountry from "../../components/SelectCountry/SelectCountry.jsx";
import Bracket from "../../components/Bracket/Bracket.jsx";
import InfoTeam from "../../components/InfoTeam/InfoTeam.jsx";
import TablePage from "../TablePage/TablePage.jsx";

function App() {
  return (
  <div>
    <main>
        <Headline />
        <SelectCountry />
        <Bracket />
        <TablePage/>
      </main>
  </div>
  );
}

export default App;