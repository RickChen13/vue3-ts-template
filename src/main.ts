import { createApp } from 'vue';
import App from '@/app/App.vue';
import router from '@/app/router';

const app = createApp(App);

app.use(router);

// import StarportPlugin from "vue-starport";
// app.use(StarportPlugin({ keepAlive: true }));

import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
app.use(ElementPlus, {
    locale: zhCn
});

app.mount('#app');
