import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        nowInfo: {},
        hisInfo: [],
        hisList: []
    },
    mutations: {
        setNowInfo(state, item) {
            state.nowInfo = item;
        },
        setHisInfo(state) {
            state.hisInfo.push(state.nowInfo);
            // sessionStorage.setItem("hisInfo", JSON.stringify(state.hisInfo));
        },
        setHisList(state, list) {
            state.hisList = list;
        }
    },
    actions: {
        getList(state) {
            http.get(http.config.listUrl, { params: {} }).then((res) => {
                state.commit('setHisList', res);
                sessionStorage.setItem("list", JSON.stringify(res));
            }, (err) => {
                console.log(err)
            });
        },
        getInfo(store) {
            console.log(store.state.hisList);
            console.log(store.state.nowInfo);
            console.log(store.state.hisInfo);
        },
        getHistory(store, url) {
            var history = store.state.hisInfo;
            let info = history.filter(function(item) {
                return item.url == url;
            });
            return info;
        }

    }
})

export default store