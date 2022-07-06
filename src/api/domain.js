import apiUtils from '@/utils/utils-api';
const DOMAIN_URL = 'domain';

const createOne = (data) => {
  return apiUtils.postRequest(`${DOMAIN_URL}`, data)
};

const getOne = (domain) => {
  return apiUtils.getRequest(`${DOMAIN_URL}/${domain}`);
}

const updateOne = (id, data) => {
  return apiUtils.putRequest(`${DOMAIN_URL}/${id}`, data)
}

export default { createOne, getOne, updateOne };