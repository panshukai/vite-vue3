export default [
    {
        path: '/electronic-release', // 电子放行
        component: () => import('@/pages/electronic-release/components/menu.vue'),
        redirect: '/electronic-release/flight-info',
        children:[
            {
                path: 'flight-info', // 航班信息
                component: () => import('@/pages/electronic-release/flight-info.vue'),
            },{
                path: 'guarantee-apply', // 保障申请
                component: () => import('@/pages/electronic-release/guarantee-apply.vue'),
            },{
                path: 'guarantee-node', // 保障节点
                component: () => import('@/pages/electronic-release/guarantee-node.vue'),
            },{
                path: 'run-communicate', // 运行沟通
                component: () => import('@/pages/electronic-release/run-communicate.vue'),
            }
        ]
    }
]