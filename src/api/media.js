import apiUtils from "@/utils/utils-api";
const MEDIA_URL = "media";

const getOne = (id) => {
  return apiUtils.getRequest(`${MEDIA_URL}/${id}`);
};

const updateOne = (id, data) => {
  return apiUtils.putRequest(`${MEDIA_URL}/${id}`, data);
};

const deleteOne = (id) => {
  return apiUtils.deleteRequest(`${MEDIA_URL}/${id}`);
};

const save = (data) => {
  return apiUtils.postRequest(`${MEDIA_URL}/save`, data);
};

const fetchMedia = () => {
  return apiUtils.getRequest(`${MEDIA_URL}`);
};

const updateMediaByFormId = (formId, data) => {
  return apiUtils.putRequest(`${MEDIA_URL}/form/${formId}`, { data: data });
};
const createMedia = (form) => {
  return apiUtils.postRequest(`${MEDIA_URL}`, form);
};
export {
  getOne,
  updateOne,
  deleteOne,
  save,
  fetchMedia,
  updateMediaByFormId,
  createMedia,
};
