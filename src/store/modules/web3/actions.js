/* eslint-disable no-unused-vars */
import { parseInt } from "lodash";
import { getLibrary } from "@/lib/getLibrary";
import { CACHE_PROVIDER, removeItem } from "@/lib/localStorage";
import { formatEther } from "@ethersproject/units";

export default {
  "web3/connect": async ({ commit, dispatch }, provider) => {
    const library = getLibrary(provider);

    const accounts = await library.listAccounts();
    if (accounts.length > 0) {
      commit("setAccount", accounts[0]);
    } else {
      // No wallet connected
      return;
    }

    const { chainId } = await library.getNetwork();
    commit("setChainId", chainId);
    commit("setActive", true);

    provider.on("connect", async (info) => {
      console.log({ info });
      let chainId = parseInt(info.chainId);
      commit("setChainId", chainId);
    });

    provider.on("accountsChanged", async (accounts) => {
      console.log("accounts", accounts);

      if (accounts.length > 0) {
        commit("setAccount", accounts[0]);
      } else {
        // No account connect to dapp => Reset out state to prepare for new connect section
        await dispatch("web3/resetApp");
      } 
    });

    provider.on("chainChanged", async (chainId) => {
      console.log(chainId);
      chainId = parseInt(chainId);
      commit("setChainId", chainId);
    });

    commit("setLibrary", library);
    commit("setProvider", provider);
  },
  "web3/disconnect": async ({ state, dispatch }) => {
    // const library = state.library;
    // if (library.currentProvider.disconnect) {
    //   await library.currentProvider.disconnect();
    // }
    await dispatch("web3/resetApp");
  },
  "web3/resetApp": async ({ state, commit }) => {
    try {
      removeItem(CACHE_PROVIDER);
    } catch (error) {
      console.error(error);
    }
    commit("setAccount", null);
    commit("setActive", false);
    commit("setLibrary", null);
    commit("user/MUTATE_SET_SIGNUP", {});
  },
  "web3/toggleWalletModal": ({ state, commit }) => {
    commit("setWalletModal", !state.walletModal);
  },
  "web3/closeWalletModal": ({ commit }) => {
    commit("setWalletModal", false);
  },
  "web3/getBalance": async ({ state, commit }) => {
    if (!state.account) return;
    const accountBalance = await state.library.getBalance(state.account);
    const balance = formatEther(accountBalance).toString();
    commit("setBalance", balance);
  },
};
