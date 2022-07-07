const mutations = {
  "SET_SNACKBAR":(state,snackbar)=>{
    console.log('set snackbar');
    const configSnackBar ={
      icon: 'mdi-alert-circle',
      mode: 'multi-line',
      timeout: 50000,
    }
    switch (snackbar.type) {
      case 'error':
        state.snackbar = {
          ...configSnackBar,
          text: snackbar.text,
          visible: snackbar.visible,
          title: 'Error',
          color: 'error',

        };
        break;
      case 'info':
        state.snackbar = {
          ...configSnackBar,
          text: snackbar.text,
          visible: snackbar.visible,
          title: 'Information',
          color: 'info',
        };
        break;
      case 'success':
        state.snackbar = {
          ...configSnackBar,
          text: snackbar.text,
          visible: snackbar.visible,
          title: 'Success',
          color: 'success',
        };
        break;
      case 'warning':
        state.snackbar = {
          ...configSnackBar,
          text: snackbar.text,
          visible: snackbar.visible,
          title: 'Warning',
          color: 'warning',
        };
        break;
    }
  }
};

export default mutations;
