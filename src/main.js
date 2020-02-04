import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import http from './http'

Vue.prototype.http = http
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')