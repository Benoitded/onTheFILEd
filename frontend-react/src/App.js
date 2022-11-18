import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Headline from "./components/Headline/Headline.jsx";
import TablePage from "./pages/TablePage/TablePage.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const contractAddress = "0xd5eaa90b94cA4D742156E10FF3C1Ab8CFfdb0935";
  const [currentAccount, setCurrentAccount] = useState("");
  const [chain, setChain] = useState("ethereum");
  return (
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
              <Route path="/" component={{}}/>
              <Route path="/table" element={<TablePage/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
