import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'
const app = createApp(App)

app.use(router)
app.use(store)
uiComponents.map(component => app.component(component.name , component))
app.mount('#app')
