import {
  saveSignup,
  checkWallet,
  signinWallet,
  signin,
  signup,
  getMe,
} from "@/api/userApi";
import router from "@/router";
import localStorage from "../../../utils/localStorage";
const actions = {
  "signup/ACT_SAVE_SIGNUP": async (_, payload) => {
    try {
      const res = await saveSignup(payload);
      if (res.status === 200) {
        return { message: "Signup successfully" };
      }
    } catch (err) {
      return { message: "wallet already exists" };
    }
  },
  "signup/ACT_CHECK_WALLET_SIGNUP": async ({ commit }, payload) => {
    try {
      const res = await checkWallet(payload);
      if (res.status === 200) {
        commit("user/MUTATE_SET_SIGNUP", res.data);
        return res.data;
      }
    } catch (err) {
      return { message: err };
    }
  },
  "signin/ACT_WALLET_SIGNIN": async ({ commit }, payload) => {
    try {
      const res = await signinWallet(payload);
      if (res.status === 200) {
        commit("user", res.data);
        console.log(res.data.token);
        localStorage.setToken(res.data.token);
        return res.data;
      }
    } catch (err) {
      return { message: err };
    }
  },
  "user/ACT_LOGIN": async ({ commit }, payload) => {
    try {
      const res = await signin(payload);
      if (res.status === 200) {
        commit("user/MUTATE_SET_SIGNIN", res.data);
        console.log(res.data.token);
        localStorage.setToken(res.data.token);
        commit("SET_SNACKBAR", {
          type: "success",
          visible: true,
          text: "Login success",
        });
        return true;
      }
    } catch (err) {
      return false;
    }
  },
  "user/ACT_SIGNUP": async ({ commit }, payload) => {
    try {
      const res = await signup(payload);
      console.log("res", res);
      if (res.status === 200) {
        commit("user/MUTATE_SET_SIGNIN", res.data);
        localStorage.setToken(res.data.token);
        commit("SET_SNACKBAR", {
          type: "success",
          visible: true,
          text: "Signup success",
        });
        router.replace({ path: "login" });
        return true;
      }
    } catch (err) {
      console.log(err.response);
      return { message: err?.response.data };
    }
  },
  "user/ACT_GET_ME": async ({ commit }) => {
    try {
      const res = await getMe();
      console.log("111111111111111111111", res);
      if (res.status === 200) {
        commit("user/MUTATE_SET_ME", res.data);
        return true;
      }
    } catch (err) {
      commit("user/MUTATE_SET_ME", null);
      console.log(err.response);
      return { message: err?.response.data };
    }
  },
};

export default actions;
