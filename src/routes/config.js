export default {
    // 菜单相关路由
    menus: [
        { key: '/app/home', title: 'Home', icon: 'scan', component: 'Home' },
        {
            key: '/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/app/ui/page1', title: 'Page1', component: 'Page1', auth: 'page1' },
                { key: '/app/ui/page2', title: 'Page2', component: 'Page2' },
                { key: '/app/ui/page3', title: 'Page3', component: 'Page3' },
                { key: '/app/ui/page4', title: 'Page4', component: 'Page4' },
            ],
        },
        {
            key: '/app/table', title: 'Table', icon: 'scan',
            subs: [
                { key: '/app/table/nomal', title: 'NomalTable', component: 'NomalTable' }
            ]
        },
    ],
    tableDetail: [
        { key: '/app/table/detail/:id', title: 'TableDetail', component: 'TableDetail' },
    ]
}