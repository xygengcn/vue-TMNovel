import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/info',
        name: 'info',
        component: () =>
            import('../views/Info.vue')
    },
    {
        path: '/content',
        name: 'content',
        component: () =>
            import('../views/Content.vue'),

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router