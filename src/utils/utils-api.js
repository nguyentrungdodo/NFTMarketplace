import axios from 'axios';
import router from '@/router';
import localStorage from './localStorage';

const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  timeout: process.env.VUE_APP_TIMEOUT,
});

service.interceptors.request.use(
  (config) => {
    const user_token = localStorage.getService().getToken();
    if (user_token) {
      config.headers['Authorization'] = 'Bearer ' + user_token;
    }
    config.headers['Content-type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  function (error) {
    if (error?.response?.status === 404) {
      router.replace({ path: '/error404' });
      return;
    }
    if (error?.response?.status === 403 ||error?.response?.status === 401 ) {
      router.replace({ path: '/login' });
      return;
    }
    return Promise.reject(error);
  }
);

const getRequest = (url) => {
  return service.request({
    method: 'get',
    url: url,
    responseType: 'json',
  });
};

const putRequest = (url, data = {}) => {
  return service.request({
    method: 'put',
    url: url,
    responseType: 'json',
    data: data,
  });
};

const postRequest = (url, data = {}) => {
  return service.request({
    method: 'post',
    url: url,
    responseType: 'json',
    data: data,
  });
};

const deleteRequest = (url, data = {}) => {
  return service.request({
    method: 'delete',
    url: url,
    responseType: 'json',
    data: data,
  });
};

export default { getRequest, postRequest, putRequest, deleteRequest };
