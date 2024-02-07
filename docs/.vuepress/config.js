module.exports = {
    base: "/personblog/",
    title: '鸢飞戾天者望峰息心',
    description:'一个简单的个人博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.icon' }],
        ['meta', { name: 'author',content:'望峰息心' }],
        ['meta', { name: 'keywords',content:'vuepress介绍,说明,望峰息心' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
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
    plugins: [
        [
            '@vuepress/last-updated'
    ],
    ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                '/': {
                    message: "New content is available.",
                    buttonText: "Refresh"
                },
                '/zh/': {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        }
        ]
        
    ]
    
  }