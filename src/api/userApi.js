import apiUtils from "@/utils/utils-api";
const USER = "user";

const saveSignup = (data) => {
  return apiUtils.postRequest(`${USER}/save`, data);
};
const checkWallet = (data) => {
  return apiUtils.postRequest(`${USER}/wallet`, data);
};

const signinWallet = (data) => {
  return apiUtils.postRequest(`${USER}/signin`, data);
};

const signin = (data) => {
  return apiUtils.postRequest(`${USER}/signin`, data);
};

const signup = (data) => {
  return apiUtils.postRequest(`${USER}/signup`, data);
};
const getMe = () =>{
  return apiUtils.getRequest(`${USER}/me`);
}
export { saveSignup, checkWallet, signinWallet,signup,signin,getMe };
