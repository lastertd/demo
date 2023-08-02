import {defineConfig} from 'vitepress'

import { applyPlugins } from '@ruabick/md-demo-plugins';

export default defineConfig({
    // site-level options
    title:"SSS UI Plus",

    themeConfig: {
        siteTitle:"SSS-UI",
        logo:'favicon.ico',
        nav: [
            {text: '指南', link: '/guide/', activeMatch: '/guide'},
            {text: '组件', link: '/comps/button/', activeMatch: '/comps'},
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/lastertd/sss-ui-plus" }],
        sidebar:{
            '/guide/':[
                {
                    text:'指南',
                    items:[
                        {text:'安装',link:'/guide/'},
                        {text:'快速开始',link:'/guide/start'},
                    ]
                }
            ],
            '/comps/':[
                {
                    text:'基础组件',
                    items:[
                        {text:'Button 按钮',link:'/comps/button/'},
                        {text:'Link 链接',link:'/comps/link/'},
                    ]
                },
                {
                    text:'反馈组件',
                    items:[

                    ]
                }
            ]
        }

    },
    markdown: {
        config: (md) => {
            applyPlugins(md);
        }
    },
    vite: {
        plugins: []
    }

})