import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* use router */
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)


/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUser)

/* import specific icons */
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserTie)

/* import specific icons */
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faPersonChalkboard)

/* import specific icons */
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faGraduationCap)




createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
