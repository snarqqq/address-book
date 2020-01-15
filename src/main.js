import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiHQV4GcGrkshQbPU52dV6TGNjlF4lpgU",
  authDomain: "vue-app-61170.firebaseapp.com",
  databaseURL: "https://vue-app-61170.firebaseio.com",
  projectId: "vue-app-61170",
  storageBucket: "vue-app-61170.appspot.com",
  messagingSenderId: "769878700635",
  appId: "1:769878700635:web:fa387b96f09c1f2b0b857e",
  measurementId: "G-RC3JP3CSXS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
