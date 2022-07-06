export default {
  setLibrary(state, library) {
    state.library = library;
  },
  setProvider(state, provider) {
    state.provider = provider;
  },
  setActive(state, active) {
    state.active = active;
  },
  setProviderName(state, name) {
    state.providerName = name;
  },
  setAccount(state, account) {
    state.account = account;
  },
  setChainId(state, chainId) {
    state.chainId = chainId;
  },
  setWalletModal(state, open) {
    state.walletModal = open;
  },
  setBalance(state,balance){
    state.balance = balance;
  }
};
