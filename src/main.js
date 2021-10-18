import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import ScrollAnimation from './directives/scrollanimation.js'

createApp(App).directive('scrollanimation', ScrollAnimation).mount('#app')
