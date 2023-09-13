import { createApp } from 'vue';
import App from '@/app/App.vue';
const app = createApp(App);

import router from '@/app/router';
app.use(router);

import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
app.use(ElementPlus, {
    locale: zhCn
});

app.mount('#app');
