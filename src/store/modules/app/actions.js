import formApi from '@/api/form';

const actions = {
  'form/ACT_FETCH_form': async ({ commit }, payload) => {
    console.log('zoooooo');
    const formId = payload.id;
    try {
      const res = await formApi.getOne(formId);
      if (res.data) {
        commit('form/MUTATE_SET_FORM', res.data);
      }
      return null;
    } catch (error) {
      alert('500 - Internal Server', error);
    }
  },
  'form/ACT_FETCH_UPDATE_PAID_FORM': async ({ commit }, formId) => {
    console.trace('1111111');
    console.log('zooooon111', commit);
    try {
      const res = await formApi.updatePaid(formId);
      if (res.data) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      alert('500 - Internal Server');
    }
  },
  'form/ACT_FETCH_DELETE_FORM': async (payload) => {
    await formApi.deleteOne(payload.id);
  },
  'form/FETCH_CREATE_FORM': async ({ commit }, payload) => {
    try {
      const res = await formApi.create(payload.template_id);
      console.log(res);
      if (res.data) {
        commit('form/MUTATE_SET_FORM', res.data);
        return res.data;
      }
      return null;
    } catch (error) {
      return null;
    }
  },
  'form/ACT_FETCH_UPLOAD_IMAGES': async (context, payload) => {
    const { id, dataIpfs } = payload;
    await formApi.fillIpfs(id, dataIpfs);
  },
  'form/FETCH_CHECK_CHANGE': async (context, payload) => {
    try {
      const { id, html, css } = payload;
      const res = await formApi.checkChange(id, html, css);
      if (res.data.saved) {
        return true;
      }
      return false;
    } catch (error) {
      console.log('error -', error);
      if (error.response.status === 400) {
        return false;
      }
      return false;
    }
  },
  'form/UPLOAD_DIRECTORY': async ({ commit }, payload) => {
    try {
      const { formId, formData } = payload;
      const res = await formApi.uploadDirectory(formId, formData);
      if (res.data) {
        commit('media/MUTATE_SET_MEDIA', res.data);
        return res.data;
      }
      return false;
    } catch (error) {
      console.log('error -', error);
      if (error.response.status === 400) {
        return false;
      }
      return false;
    }
  },
  'form/GET_PAID_BY_USER': async ({ commit }) => {
    try {
      const res = await formApi.getPaidByUser();
      commit('form/MUTATE_SET_PAID_FORMS', res.data);
    } catch (error) {
      alert('500 - Internal Server');
      return null;
    }
  },
};

export default actions;
