const mutations = {
  'template/MUTATE_SET_TEMPLATE_LIST': (state, templateList) => {
    state.templateList = templateList;
  },
  'template/MUTATE_SET_TEMPLATE': (state, template) => {
    state.template = template;
  }
};

export default mutations;