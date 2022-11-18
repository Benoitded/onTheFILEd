import React, { useEffect, useState } from "react";
import "./Header.css";
import { dataNetworks } from "../../data/dataNetworks.jsx";

import wheel from "../../assets/wheel.svg";
import ethereumLogo from "../../assets/ethereumLogo.png";
import goerliLogo from "../../assets/goerliLogo.png";

export default function Header({
  currentAccount,
  setCurrentAccount,
  chain,
  setChain,
}) {
  const [seeMenu, setSeeMenu] = React.useState(false);
  const [error, setError] = useState();

  const chainIdToName = [];
  chainIdToName[1] = "ethereum";
  chainIdToName[5] = "goerli";

  const networks = {
    filecoin: {
      chainName: "Filecoin — Mainnet",
      chain: "FIL",
      icon: "filecoin",
      status: "incubating",
      rpc: ["https://api.node.glif.io/rpc/v0"],
      faucets: [],
      nativeCurrency: {
        name: "filecoin",
        symbol: "FIL",
        decimals: 18,
      },
      infoURL: "https://filecoin.io",
      shortName: "filecoin",
      chainId: 314,
      networkId: 314,
      slip44: 461,
      explorers: [
        {
          name: "Filfox",
          url: "https://filfox.info/en",
          standard: "none",
        },
        {
          name: "Filscan",
          url: "https://filscan.io",
          standard: "none",
        },
        {
          name: "Filscout",
          url: "https://filscout.io/en",
          standard: "none",
        },
      ],
    },
    wallaby: {
      chainName: "Filecoin — Wallaby testnet",
      chain: "FIL",
      status: "incubating",
      rpc: ["https://wallaby.node.glif.io/rpc/v0"],
      faucets: ["https://wallaby.network/#faucet"],
      nativeCurrency: {
        name: "testnet filecoin",
        symbol: "tFIL",
        decimals: 18,
      },
      infoURL: "https://filecoin.io",
      shortName: "filecoin-wallaby",
      icon: "filecoin",
      chainId: 31415,
      networkId: 31415,
      slip44: 1,
      explorers: [
        {
          name: "Glif Explorer",
          url: "https://explorer.glif.io/wallaby",
          standard: "none",
        },
        {
          name: "Filscan",
          url: "https://wallaby.filscan.io",
          standard: "none",
        },
      ],
    },
    mainnet: {
      chainName: "Ethereum Mainnet",
      chain: "ETH",
      icon: "ethereum",
      rpc: [
        "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
        "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
        "https://api.mycryptoapi.com/eth",
        "https://cloudflare-eth.com",
      ],
      faucets: [],
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      infoURL: "https://ethereum.org",
      shortName: "eth",
      chainId: `0x${Number(1).toString(16)}`,
      networkId: 1,
      slip44: 60,
      ens: {
        registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      },
      explorers: [
        {
          name: "etherscan",
          url: "https://etherscan.io",
          standard: "EIP3091",
        },
      ],
    },
    goerli: {
      chainName: "Görli",
      title: "Ethereum Testnet Görli",
      chain: "ETH",
      rpcUrls: [
        "https://goerli.infura.io/v3/${INFURA_API_KEY}",
        "wss://goerli.infura.io/v3/${INFURA_API_KEY}",
        "https://rpc.goerli.mudit.blog/",
      ],
      faucets: [
        "http://fauceth.komputing.org?chain=5&address=${ADDRESS}",
        "https://goerli-faucet.slock.it?address=${ADDRESS}",
        "https://faucet.goerli.mudit.blog",
      ],
      nativeCurrency: {
        name: "Görli Ether",
        symbol: "ETH",
        decimals: 18,
      },
      infoURL: "https://goerli.net/#about",
      shortName: "gor",
      chainId: `0x${Number(5).toString(16)}`,
      networkId: 5,
      ens: {
        registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010",
      },
      explorers: [
        {
          name: "etherscan-goerli",
          url: "https://goerli.etherscan.io",
          standard: "EIP3091",
        },
      ],
    },
  };

  const getEthereumObject = () => window.ethereum;

  const findMetaMaskAccount = async () => {
    try {
      const ethereum = getEthereumObject();

      /*
       * First make sure we have access to the Ethereum object.
       */
      if (!ethereum) {
        console.error("Make sure you have Metamask!");
        return null;
      }

      console.log("We have the Ethereum object", ethereum);
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        return account;
      } else {
        console.error("No authorized account found");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  function reduceAddress(address) {
    return (
      address.slice(0, 5) +
      "..." +
      address.slice(address.length - 3, address.length)
    );
  }

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      console.log(networkName);
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
    setChain(chainIdToName[parseInt(window.ethereum.chainId, 16)]);
    console.log(chain);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", networkChanged);

      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }
  }, []);

  useEffect(() => {
    //Update logo
    if (window.ethereum) {
      setChain(chainIdToName[parseInt(window.ethereum.chainId, 16)]);
    }
    console.log(iconChainURL);
  }, [window.ethereum]);

  let iconChainURL = wheel;
  if (chain == "wallaby") {
    console.log("on est sur goerli");
    iconChainURL = goerliLogo;
  } else if (chain == "filecoin") {
    console.log("on est sur eth");
    iconChainURL = ethereumLogo;
  } else iconChainURL = wheel;

  return (
    <nav>
      <div onClick={() => console.log(chain)}>onTheFILEd</div>
      <div>
        <div class="btnSelectChain" onClick={() => setSeeMenu(!seeMenu)}>
          <img src={iconChainURL} alt="wheel for setting" />
          {seeMenu && (
            <ul class="menuSelectChain">
              <li onClick={() => handleNetworkSwitch("filecoin")}>
                <img src={ethereumLogo} />
                Filecoin
              </li>
              <li onClick={() => handleNetworkSwitch("wallaby")}>
                <img src={goerliLogo} />
                Wallaby
              </li>
            </ul>
          )}
        </div>
        {!currentAccount ? (
          <div onClick={connectWallet}>Connect</div>
        ) : (
          <div>{reduceAddress(currentAccount)}</div>
        )}
      </div>
    </nav>
  );
}
