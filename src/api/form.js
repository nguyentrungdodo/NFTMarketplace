import apiUtils from '@/utils/utils-api';
const FORM_URL = 'form';

const create = (template_id) => {
  return apiUtils.postRequest(`${FORM_URL}`, { template_id });
};

const getOne = (id) => {
  return apiUtils.getRequest(`${FORM_URL}/${id}`);
};

const updateOne = (id, data) => {
  return apiUtils.putRequest(`${FORM_URL}/${id}`, data);
};

const updatePaid = (id) => {
  return apiUtils.putRequest(`${FORM_URL}/paid/${id}`);
};
const deleteOne = (id) => {
  return apiUtils.deleteRequest(`${FORM_URL}/${id}`);
};

const publish = (id) => {
  return apiUtils.postRequest(`${FORM_URL}/publish/${id}`);
};

const uploadDirectory = (id, form) => {
  return apiUtils.postRequest(`${FORM_URL}/upload/${id}`, form);
};
const checkChange = (id, html, css) => {
  return apiUtils.postRequest(`${FORM_URL}/check-change`, { id, html, css });
};
const getPaidByUser = () => {
  return apiUtils.getRequest(`${FORM_URL}/all`);
};
export default {
  getOne,
  updateOne,
  deleteOne,
  create,
  publish,
  uploadDirectory,
  checkChange,
  getPaidByUser,
  updatePaid,
};
