const mutations = {
  'form/MUTATE_SET_FORM_LIST': (state, formList) => {
    state.formList = formList;
  },
  'form/MUTATE_SET_FORM': (state, form) => {
    state.form = form;
  },
  'form/MUTATE_SET_DATA_IPFS': (state, data_ipfs) => {
    state.dataIpfs = data_ipfs;
  },
  'form/MUTATE_SET_PAID_FORMS': (state, paidForms) => {
    state.paidForms = paidForms;
  },
};

export default mutations;
