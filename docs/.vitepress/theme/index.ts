import DefaultTheme from 'vitepress/theme';






import "sss-ui-plus/dist/index.css"
import ui from "sss-ui-plus/es/index"


import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';



export default {
    ...DefaultTheme,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }) {
        app.use(ui);
        app.component('demo', DemoBlock);
    }
}