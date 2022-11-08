 import { createApp } from 'vue'
 import App from './App.vue'
 import router from './router'
 import "bootstrap/dist/css/bootstrap.min.css"
 import "bootstrap/dist/js/bootstrap.min.js"
 import "bootstrap"
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { fas } from '@fortawesome/free-solid-svg-icons'
 import '@coreui/coreui/dist/css/coreui.min.css'
 
 import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'

import { useVuelidate } from '@vuelidate/core'



 

 library.add(fas);

 createApp(App)
     .component('IconAwe', FontAwesomeIcon)
     .use(router) 
     .use(useVuelidate) 
     .use(VueUniversalModal, {
        teleportTarget: '#my-modals',
        modalComponent: 'MyModal',
        
       
      })
    
     

     .mount('#app');