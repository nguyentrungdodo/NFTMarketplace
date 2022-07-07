import Vue from 'vue'
import Vuex from 'vuex'
import mediaModule from './modules/media';
import userModule from './modules/user';
import appModule from './modules/app';
import blogModule from './modules/blog'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    media: mediaModule,
    user:userModule,
    app:appModule,
    blog:blogModule,
  },
})
