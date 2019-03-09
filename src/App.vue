<template>
  <div id="app">
      <!-- <img class="bg-header" src="./assets/header.jpg" alt=""> -->
   <nav-lunch />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Nav from '@/components/CssMenu'
// import Nav from '@/components/navigation' 
export default {
  name: 'App',
  components: {
    'nav-lunch': Nav
  },
  methods: {
      ...mapActions(['listenToProductList','listenToGroups'])
    },
    created() {
    //  let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.listenToGroups();
     // this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}
.bg-header{
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.bg { 
    /* The image used */
    background-image: url("/assets/lunch01.jpg");

    /* Full height */
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
