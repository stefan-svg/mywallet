import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee) */
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()
/* import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs } from ‘@fortawesome/free-brands-svg-icons’ */
/* library.add(faVuejs) */
/* Vue.component('font-awesome-icon', FontAwesomeIcon) */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
