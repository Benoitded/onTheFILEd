import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
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
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        chain={chain}
        setChain={setChain}
      />
      <main>
        <InfoTeam dataCountries={dataCountries[1]} isHolder={true} />
        <Headline />
        <SelectCountry />
        <Bracket />
      </main>
      <Footer />
      <Router>
        <div className="App">
          <Header
            currentAccount={currentAccount}
            setCurrentAccount={setCurrentAccount}
            chain={chain}
            setChain={setChain}
          />
          <Headline />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edeefeit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <Link to="/table">Table</Link>

          <Routes>
            <Route path="/" component={{}} />
            <Route path="/table" element={<TablePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
