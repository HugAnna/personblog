module.exports = {
    themeConfig: {
        logo: '/assets/img/test4.jpg',
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            
            {
                text: 'Languages',
                items: [
                    { text: 'Group1', items: [  { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/about' },] },
                    { text: 'Group2', items: [  { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/about' },] }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        lastUpdated: '更新时间', // string | boolean
        sidebar: [
            '', 'about',
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            }
        ]
    },
 
    
  }