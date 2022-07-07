import WalletConnectProvider from "@walletconnect/web3-provider";
import { NETWORK_CHAIN_IDS, POLYGON_RPC } from "./constants";

const injected = async () => {
  let provider = null;
  if (typeof window.ethereum !== "undefined") {
    provider = window.ethereum;

    try {
      await provider.request({ method: "eth_requestAccounts" });
    } catch (error) {
      throw new Error("Please check your wallet");
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    throw new Error(
      "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile."
    );
  }
  return provider;
};

export const silentInjected = async () => {
  let provider = null;
  if (typeof window.ethereum !== "undefined") {
    provider = window.ethereum;
  } else if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    throw new Error(
      "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile."
    );
  }

  return provider;
};

const walletConnect = () => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const provider = new WalletConnectProvider({
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
      rpc: {
        [NETWORK_CHAIN_IDS.polygon]: POLYGON_RPC,
      },
      chainId: NETWORK_CHAIN_IDS.polygon,
      rpcUrl: POLYGON_RPC,
    });
    try {
      await provider.enable();
      resolve(provider);
    } catch (e) {
      reject(e);
    }
  });
};

export { injected, walletConnect };
