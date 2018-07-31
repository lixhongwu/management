import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/index',
            component: resolve => require(['../components/index.vue'], resolve),
            children: [{
                    path: '/mian',
                    component: resolve => require(['../components/page/main.vue'], resolve),
                    children:[{
                                    path: '',
                                    name:'表格',
                                    component: resolve => require(['../components/page/home.vue'], resolve)
                                },
                                {
                                    path: '/form',
                                      name:'表单',
                                    component: resolve => require(['../components/page/form.vue'], resolve)
                                },
                                {
                                    path: '/table',
                                      name:'表格',
                                    component: resolve => require(['../components/page/table.vue'], resolve)
                                },
                                {
                                    path: '/markdown-viewer',
                                      name:'markdown',
                                    component: resolve => require(['../components/page/markdown-viewer.vue'], resolve)
                                },
                                {
                                    path: '/markdown-editor-1',
                                      name:'markdown',
                                    component: resolve => require(['../components/page/markdown-editor-1.vue'], resolve)
                                },
                                {
                                    path: '/markdown-editor-2',
                                    name:'editor',
                                  component: resolve => require(['../components/page/markdown-editor-2.vue'], resolve)
                              },
                              {
                                  path: '/rtf',
                                    name:'rtf',
                                  component: resolve => require(['../components/page/rtf.vue'], resolve)
                              },{
                                  path: '/upload',
                                    name:'upload',
                                  component: resolve => require(['../components/page/upload.vue'], resolve)
                              }
                          ]}]

        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login.vue'], resolve)
        },
    ]
})
