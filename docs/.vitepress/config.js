export default {
    title: '工一云电脑',
    description: 'CEC',
    base: '/co-docs/',

    lastUpdated: true,
    // outlineTitle: '大纲',
    aside: true,
    
    themeConfig: {
        logo: '/logo.svg',
        // siteTitle: false,

        outlineTitle: '本页目录',
        // outline:2,
        
        algolia: {
            appId: 'N26XKP71HQ', // 需要替换
            apiKey: 'b68973e86f1cea6fe107eecb587b3d40', // 需要替换
            indexName: 'co-docs-index', // 需要替换
            placeholder: '请输入关键词',
            buttonText: '搜索'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/cecgroup/co-docs' },
        ],

        nav: [
            // { text: '工一数智', link: '/cec' }
            {
              text: '版本',
              items: [
                { text: 'v1.8', link: '/index' },
                { text: 'v1.9', link: '/index' },
                // { text: '愿景', link: '/vision' }
              ]
            }
          ],

          sidebar: [
            {
                text: '文档',
                items: [
                  { text: '快速开始', link: '/index' },
                  { text: 'APP下载', link: '/index#APP' },
                  // { text: '设置', link: '/index#设置' },
                ]
              },
            // {
            //   text: '我的思考',
            //   items: [
            //     { text: '前言', link: '/consideration#前言' },
            //     { text: '想清楚', link: '/consideration#想清楚' },
            //     { text: '说明白', link: '/consideration#说明白' },
            //   ]
            // },
            // {
            //   text: '我的提案',
            //   items: [
            //     { text: '分阶段目标', link: '/plan#分阶段目标' },
            //     { text: '整体数字化方案', link: '/plan#整体数字化方案' },
            //     { text: '具体实施', link: '/plan#具体实施' },

            //   ]
            // },
            // {
            //     text: 'BP',
            //     items: [
            //       { text: '我的BP', link: '/bp#我的BP' },
            //     //   { text: '实现步骤', link: '/plan#实现步骤' },
            //     //   { text: '云办公&私有云方案', link: '/plan#云办公&私有云方案' },
            //     //   { text: '核心数字化团队建设方案', link: '/plan#核心数字化团队建设方案&私有云' },
            //     ]
            //   }
          ],
        // sidebar: getSideBar("./docs"),

        editLink: {
        pattern: 'https://github.com/cecgroup/co-docs/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
        },
        //   footer: {
        //     // message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 工一数智'
        //     }
    }

    
}
