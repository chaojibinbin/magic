import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import bar from './views/barmenu.vue'
Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
           
            component:Home,
            
            children:[
                {
                    name:'home',
                    path:'/',
                    component:()=>import('./views/serch.vue')
                },
                {
                    path:'/wenku',
                    name:'wenku',
                    component:()=>import('./views/wenku.vue')
                }
            ]
        },
        

    ]
})