import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/about',
            component: resolve => require(['../components/common/index.vue'], resolve),
            children: [{
                    path: '',
                    name:'表格',
                    component: resolve => require(['../components/common/about.vue'], resolve)
                },
                {
                    path: '/form',
                      name:'表格',
                    component: resolve => require(['../components/page/form.vue'], resolve)
                },
                {
                    path: '/table',
                      name:'表格',
                    component: resolve => require(['../components/page/table.vue'], resolve)
                },
                {
                    path: '/markdown-viewer',
                      name:'表格',
                    component: resolve => require(['../components/page/markdown-viewer.vue'], resolve)
                },
                {
                    path: '/markdown-editor-1',
                      name:'表格',
                    component: resolve => require(['../components/page/markdown-editor-1.vue'], resolve)
                },
                {
                    path: '/markdown-editor-2',
                      name:'表格',
                    component: resolve => require(['../components/page/markdown-editor-2.vue'], resolve)
                },
                {
                    path: '/rtf',
                      name:'表格',
                    component: resolve => require(['../components/page/rtf.vue'], resolve)
                },{
                    path: '/upload',
                      name:'表格',
                    component: resolve => require(['../components/page/upload.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/login.vue'], resolve)
        },
    ]
})
