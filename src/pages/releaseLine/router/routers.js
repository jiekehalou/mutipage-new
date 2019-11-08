const _import = file => () => import('@/view/' + file + '.vue');
const SmartLineMain = _import('releaseLine/layout/main') //系统管理main主页
const Test = _import('releaseLine/test') //test1
const Test2 = _import('releaseLine/test2') //test2
export default [
    {
        // 智能航班监控
        path: '/smartLine',
        name: 'FMS06',
        meta: {
            icon: 'logo-buffer',
            title: '智能航班监控'
        },
        component: SmartLineMain,
        children: [
            // {
            //     path: '',
            //     name: 'FMS06P001',
            //     meta: {
            //         icon: '',
            //         codes: ['add'],
            //         title: '智能航班监控',
            //         tagsNavVisible: false
            //     },
            //     component: () => import('@/view/smartLine/index.vue')
            // }
        ]
    },
    {
        path: '', redirect: { path: '/smartLine' }
    },
    { path: '', component: Test },
    { path: '', component: Test2 }
    

]