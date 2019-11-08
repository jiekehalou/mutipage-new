const _import = file => () => import('@/view/' + file + '.vue');
const systemManagementMain = _import('systemManagement/layout/main') //系统管理main主页
const Test = _import('systemManagement/test') //test1
const Test2 = _import('systemManagement/test2') //test2
const Test3= _import('systemManagement/test3') //test3
export default [
    {
        // 智能航班监控
        path: '/main',
        name: 'FMS06',
        meta: {
            icon: 'logo-buffer',
            title: '智能航班监控'
        },
        component: systemManagementMain,
        children: [
            { path: '/Test', component: Test },
            { path: '/Test2', component: Test2 },
            { path: '/Test3', component: Test3 },
        ]
    },
    {
        path: '', redirect: { path: '/main' }
    },
   
    

]