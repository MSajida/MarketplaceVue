<template>
  <div id="app">
    <!-- <div v-bind:class="{ full: isAuthenticated==false}"> -->
      
      <Header></Header>
      
    <!-- </div> -->
    
    <div v-if="isAuthenticated"> 
        <Menu></Menu>
     </div>
    <div v-else>
      
    </div>
    <div class="content container-fluid">
      <router-view />
      
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import Header from "./components/APPHeader.vue"
import Menu from "./components/Menu.vue"
import IniHeader from "./components/InitialHeader.vue"
import LoginForm from "./components/LoginForm.vue"
// import {mapState} from 'vuex';
export default {
  name: 'App',
  components: {
    LoginForm
  },
  data() {
     return {
      isAuthenticated: false,
       user: ""
     }

  },

  components: {
    Header,
    Menu,
    IniHeader
  },
  mounted() {
    // showComponent(){
      // console.log("jeevanApp")
     
      // Check if localStorage item is true
       if(localStorage.getItem('loggedIn')=="true"){
        this.isAuthenticated =  true;
      } else{
        this.isAuthenticated = false;
      }
    // }
  },
  updated(){
    if(localStorage.getItem('loggedIn')=="true"){
        this.isAuthenticated =  true;
      } else{
        this.isAuthenticated = false;
      }
  },
  methods: {
    sample() {
      // this.user = sessionStorage.getItem('user');
      // if (this.user != "" || this.user!=null) {
      //   this.isAuthenticated = true
      //   console.log("user", this.user)
      // }
      // }else{
      //   console.log("nothing")
      //   this.isAuthenticated = false;
      //   localStorage.setItem("menu",this.isAuthenticated)
      
      // }
     }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.full{
  width: 100%;
  text-align: center;
  margin: 0px;
  box-sizing: border-box;
  padding: 0px;
  /* overflow: hidden; */
  /* margin */
  z-index: 1000;
}
</style>
