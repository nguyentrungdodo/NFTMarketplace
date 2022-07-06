const localStorageUtils = (function () {
    let _service;
    function _getService() {
      if (!_service) {
        _service = this;
      }
      return _service;
    }
  
    function _setToken(userToken) {
      localStorage.setItem('access_token', userToken);
    }
  
    function _getToken() {
      return localStorage.getItem('access_token');
    }
  
    function _clearToken() {
      localStorage.removeItem('access_token');
    }
  
    function _setCurrentUser(user) {
      localStorage.setItem('current_user', user);
    }
  
    function _getCurrentUser() {
      return localStorage.getItem('current_user');
    }
  
    function _clearCurrentUser() {
      localStorage.removeItem('current_user');
    }
  
    function _setPage(page) {
      localStorage.setItem('page', page);
    }
  
    function _getPage() {
      return localStorage.getItem('page');
    }
  
    function _clearPage() {
      localStorage.removeItem('page');
    }
  
    return {
      getService: _getService,
      setToken: _setToken,
      getToken: _getToken,
      clearToken: _clearToken,
      setCurrentUser: _setCurrentUser,
      getCurrentUser: _getCurrentUser,
      clearCurrentUser: _clearCurrentUser,
      getPage: _getPage,
      setPage: _setPage,
      clearPage: _clearPage,
    };
  })();
  
  export default localStorageUtils;