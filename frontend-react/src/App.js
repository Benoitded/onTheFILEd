import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Swap from "./components/Swap/Swap.jsx";
import Headline from "./components/Headline/Headline.jsx";
import SelectCountry from "./components/SelectCountry/SelectCountry.jsx";
import Bracket from "./components/Bracket/Bracket.jsx";
import InfoTeam from "./components/InfoTeam/InfoTeam.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TablePage from "./pages/TablePage/TablePage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { dataCountries } from "./data/dataCountries.jsx";

function App() {
  const contractAddress = "0xd5eaa90b94cA4D742156E10FF3C1Ab8CFfdb0935";
  const [currentAccount, setCurrentAccount] = useState("");
  const [chain, setChain] = useState("ethereum");
  return (
    <div className="App">
      <Router>
        <Swap />
        <Header
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          chain={chain}
          setChain={setChain}
        />
        <main>
          <InfoTeam dataCountries={dataCountries[1]} isHolder={false} />
          <Headline />
          <SelectCountry />
          <Bracket />
        </main>

        <Link to="/table">Table</Link>

        <Routes>
          <Route path="/" component={{}} />
          <Route path="/table" element={<TablePage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
