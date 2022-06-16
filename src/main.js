import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import "@/index.css"

const myapp = createApp(App)

components.forEach(component => {
   myapp.component(component.name, component)
})

myapp.mount('#app')
