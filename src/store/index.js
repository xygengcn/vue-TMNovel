import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        List: [],
        Content: {},

    },
    mutations: {
        setList(state, list) {
            state.List = list;
        },
        setInfo(state, data) {
            state.Info = data;
        },
        setContent(state, data) {
            state.Content = data;
        },
        setChapters(state, data) {
            state.Chapters = data;
        },
        setIsloading(state, is) {
            state.isloading = is;
        }
    },
    actions: {
        loadList(state) {
            http.get(http.config.listUrl, { params: {} }).then((res) => {
                state.commit('setList', res);
                sessionStorage.setItem("list", JSON.stringify(res));
            }, (err) => {
                console.log(err)
            });
        },
        loadInfo(state, url) {
            state.commit('setIsloading', true);

        },
        loadContent(state, url) {
            state.commit('setIsloading', true);
            http.get(http.config.ContentUrl, { params: { url: url } }).then((res) => {
                state.commit('setContent', res);
                state.commit('setIsloading', false);
            }, (err) => {
                console.log(err)
            });
        }
    }
})

export default store