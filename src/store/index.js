import Vue from 'vue'
import Vuex from 'vuex'
import mediaModule from './modules/media';
import userModule from './modules/user';
import appModule from './modules/app';
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    media: mediaModule,
    user:userModule,
    app:appModule,
  },
})
