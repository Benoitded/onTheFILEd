export const dataNetworks = {
  mainnet: {
    name: "Ethereum Mainnet",
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
  filecoin: {
    name: "Filecoin — Mainnet",
    chain: "FIL",
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
    icon: "filecoin",
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
  goerli: {
    name: "Görli",
    title: "Ethereum Testnet Görli",
    chain: "ETH",
    rpc: [
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
