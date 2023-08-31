import { createApp } from "vue"
import { createPinia } from "pinia"
import "./style.css"
import App from "./App.vue"
import "./plugins/firebase"

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .mount("#app")
