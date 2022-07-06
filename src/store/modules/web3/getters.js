export default {
  "web3/web3": (state) => {
    return state;
  },
  "web3/library": (state) => {
    return state.library;
  },
  "web3/provider": (state) => {
    return state.provider;
  },
  "web3/active": (state) => {
    return state.active;
  },
  "web3/account": (state) => {
    return state.account;
  },
  "web3/shortenAccount": (state) => {
    return (
      state.account &&
      `${state.account?.slice(0, 4)}...${state.account?.slice(38, 42)}`
    );
  },
  "web3/chainId": (state) => {
    return state.chainId;
  },
  "web3/walletModal": (state) => {
    return state.walletModal;
  },
  "web3/balance": (state) => {
    return Math.floor(state.balance);
  },
};
