import TableComponent from "../../components/TableComponent/TableComponent.jsx";
import React, { useEffect, useState } from "react";
import { dataCountries } from "../../data/dataCountries.jsx";

import Headline from "../../components/Headline/Headline.jsx";
import SelectCountry from "../../components/SelectCountry/SelectCountry.jsx";
import Bracket from "../../components/Bracket/Bracket.jsx";
import InfoTeam from "../../components/InfoTeam/InfoTeam.jsx";
import TablePage from "../TablePage/TablePage.jsx";

import { useLocation } from "react-router-dom";

function getCountryJson(name, listCountries) {
  for (let i = 0; i < listCountries.length; i++) {
    if (listCountries[i].name == name) return listCountries[i];
  }
}

function App() {
  const location = useLocation();
  console.log("location.pathname ==", location.pathname);
  let country = location.pathname.substring(1);

  let countryJson = getCountryJson(country, dataCountries);
  console.log("country ==", country);
  return (
    <div>
      <main>
        <InfoTeam dataCountries={countryJson} isHolder={false} />
        <TablePage />
      </main>
    </div>
  );
}

export default App;
