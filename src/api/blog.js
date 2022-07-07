import apiUtils from "@/utils/utils-api";
const BLog_URL = "blog";

const getOne = (id) => {
  return apiUtils.getRequest(`${BLog_URL}/${id}`);
};

const updateOne = (id, data) => {
  return apiUtils.putRequest(`${BLog_URL}/${id}`, data);
};

const deleteOne = (id) => {
  return apiUtils.deleteRequest(`${BLog_URL}/${id}`);
};

const save = (data) => {
  return apiUtils.postRequest(`${BLog_URL}/save`, data);
};

const fetchAllBLog = () => {
  return apiUtils.getRequest(`${BLog_URL}`);
};

const createBlog = (form) => {
  return apiUtils.postRequest(`${BLog_URL}`, form);
};
export {
  getOne,
  updateOne,
  deleteOne,
  save,
  fetchAllBLog,
  createBlog,
};
