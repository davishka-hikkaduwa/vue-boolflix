import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faStar, faStarRegular);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  render: h => h(App),
}).$mount('#app')
