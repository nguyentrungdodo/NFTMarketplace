import { BSC_RPC, INFURA_ID, POLYGON_RPC } from "./constants";

const BSC_TESTNET = {
  chainId: "0x61",
  chainName: "Binance Smart Chain Testnet",
  nativeCurrency: {
    name: "Binance Coin",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: [BSC_RPC]
};

const BSC_MAINNET = {
  chainId: "0x38",
  chainName: "Binance Smart Chain Mainnet",
  nativeCurrency: {
    name: "Binance Coin",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: [BSC_RPC]
};

const ETH_TESTNET = {
  chainId: "0x4",
  chainName: "Rinkeby",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: [`https://rinkeby.infura.io/v3/${INFURA_ID}`]
};

const ETH_MAINNET = {
  chainId: "0x1",
  chainName: "Ethereum",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: [`https://mainnet.infura.io/v3/${INFURA_ID}`]
};

const POLYGON_TESTNET = {
  chainId: "0x13881", // Hexadecimal version of 80001, prefixed with 0x
  chainName: "POLYGON Mumbai",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
  },
  rpcUrls: [POLYGON_RPC]
};

const NETWORKS = {
  "0x38": BSC_TESTNET,
  "0x61": BSC_MAINNET,
  "0x1": ETH_MAINNET,
  "0x4": ETH_TESTNET,
  "0x13881": POLYGON_TESTNET
};

export async function requestSwitchNetwork(chainId) {
  const provider = window?.ethereum;

  const chainIdHex = `0x${chainId.toString(16)}`;

  if (provider) {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainIdHex }]
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [NETWORKS[chainIdHex]]
          });
        } catch (addError) {
          console.log({ addError });
        }
      }
    }
  }
}
