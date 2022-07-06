import apiUtils from '@/utils/utils-api';
const TEMPLATE_URL = 'template';

const getOne = (id) => {
  return apiUtils.getRequest(`${TEMPLATE_URL}/${id}`);
};

const getAll = () => {
  return apiUtils.getRequest(`${TEMPLATE_URL}`);
};

const updateOne = (id, data) => {
  return apiUtils.putRequest(`${TEMPLATE_URL}/${id}`, data);
};

const createOne = (data) => {
  return apiUtils.postRequest(`${TEMPLATE_URL}`, data)
}

export default { getOne, updateOne, createOne, getAll };
