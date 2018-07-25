module.exports = {
    title: 'trimNB',
    description: '学习归纳总结的小站',
    // 打包相对路径配置
    base: '/tnb/',
    themeConfig: {
        // 顶部导航
        nav: [
            {text: '首页', link: '/'},
            {text: '架构', link: '/architecture/'},
            {
                text: '前端',
                items: [
                    {text: 'react', link: '/web/react'},
                    {text: 'vue', link: '/web/vue'}
                ]
            },
            {text: '算法', link: '/arithmetic/'},
            {text: '大数据', link: '/bigdata/'}
        ],
        // 侧边栏配置
        sidebar: {
            '/web/react': [
                {
                    // 节点名称
                    title: 'react学习',
                    // markdown文件路径
                    children: ['/web/react.md']
                }
            ],
            '/web/vue': [
                {
                    title: 'vue学习',
                    children: ['/web/vue.md']
                }
            ]
        }
    }
}