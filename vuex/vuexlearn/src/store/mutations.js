import Vue from "vue";
import {ASC, DESC} from '@/store/mutationType';

export default {
    [ASC](state, count) {
        state.counter += count;
    },
    [DESC](state) {
        state.counter--;
    },
    multi(state, playload) {
        state.counter *= playload.count;
    },
    changeInfo(state) {
        // state.info.name = 'james';
        // state.info['address'] = '中关村';    该方法无法实现响应式效果
        // 以下方式可实现响应式效果
        Vue.set(state.info, 'address', '中关村');
        Vue.delete(state.info, 'name');
    }
}