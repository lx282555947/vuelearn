import Vuex from 'vuex';
import Vue from 'vue';
import state from '@/store/state';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import actions from '@/store/actions';

Vue.use(Vuex);

const store = new Vuex.Store({
    // 类似于data
    state,
    // 类似于methods
    mutations,
    // 类似于computed
    getters,
    // 用于异步
    actions
})

export default store;