import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CountryPage from "./pages/CountryPage/CountryPage.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { dataCountries } from "./data/dataCountries.jsx";


function App() {
  const contractAddress = "0xd5eaa90b94cA4D742156E10FF3C1Ab8CFfdb0935";
  const [currentAccount, setCurrentAccount] = useState("");
  const [chain, setChain] = useState("ethereum");
  return (
    <div className="App">
      <Router>
          <Header
            currentAccount={currentAccount}
            setCurrentAccount={setCurrentAccount}
            chain={chain}
            setChain={setChain}
          />
        <div className="App">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/:CountryName" element={<CountryPage/>}/>
            </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
