import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(VueParticles)


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
