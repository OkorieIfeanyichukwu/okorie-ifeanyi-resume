import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* use router */
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon,FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

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

/* import specific icons */
import { faCircle } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faCircle)

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faPhone)

/* import specific icons */
import { faLocation } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faLocation)





createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .mount('#app')
