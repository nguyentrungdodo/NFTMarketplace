import templateApi from '@/api/template';

const actions = {
  'template/ACT_FETCH_TEMPLATE': async ({ commit }, payload) => {
    const templateId = payload.id;
    const templateList = await templateApi.getAll();
    const template = templateList.data.find((item) => item.id === templateId);
    if (template) {
      commit('template/MUTATE_SET_TEMPLATE', template);
    }
  },
  'template/ACT_FETCH_UPLOAD_TEMPLATE': async (_, payload) => {
    await templateApi.createOne({ name: 'test', ...payload });
    // if (res.status === 200) {
    //   alert('Upload template successfully!');
    // }
  },
  'template/ACT_FETCH_ALL_TEMPLATES': async ({ commit }) => {
    const res = await templateApi.getAll();
    commit('template/MUTATE_SET_TEMPLATE_LIST', res.data);
  },
};

export default actions;
