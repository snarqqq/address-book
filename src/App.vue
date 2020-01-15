<template>
  <v-app>
    <Loading v-show="loading"></Loading>
    <v-app-bar
      app
      color="primary"
      dark
      v-show="!loading"
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Address Book</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav/>

    <v-content v-show="!loading">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Loading from './components/Loading'
import firebase from 'firebase'
import {mapActions} from 'vuex'
import SideNav from './components/SideNav'
export default {
  name: 'App',
  components: {
    Loading,
    SideNav
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        if (this.$router.currentRoute.name === 'home') {
          this.$router.push({ name: 'addresses' }, () => {})
        }
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' }, () => {})
      }
    })
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    // ES6の分割代入構文
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
};
</script>
