import { type RouteRecordRaw } from 'vue-router';

const root: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/app/views/index/Index.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/starport',
        name: 'StarportTest',
        component: () => import('@/app/views/example/starport/StarportTest.vue')
    }
];

export default root;
