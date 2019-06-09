import Vue from 'vue'
import router from './router'
import App from './App.vue'

import firebase from 'firebase'
//
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "YOUR-PROJECT",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR-PROJECT.firebaseio.com",
  projectId: "YOUR-PROJECT",
  storageBucket: "YOUR-PROJECT.appspot.com",
  messagingSenderId: "123"
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

