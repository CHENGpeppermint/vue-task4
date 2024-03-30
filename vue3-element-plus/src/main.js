import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'; // 引入Element Plus样式文件

const app = createApp(App)
app.use(ElementPlus, { locale: locale })
app.use(store)
app.use(router)

app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
