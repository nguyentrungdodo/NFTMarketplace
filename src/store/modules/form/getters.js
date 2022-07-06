const getters = {
  'form/GET_FORM_LIST': (state) => state.listform,
  'form/GET_FORM': (state) => state.form,
  'form/GET_FORM_DATA_IPFS': (state) => state.dataIpfs,
  'form/GET_FILTER_DATA': (state) => state.filterData,
  'form/GET_PAID_FORMS': (state) => state.paidForms,
};

export default getters;
