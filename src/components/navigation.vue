<template>
<div class="navigation">
    
  <div class="circular" :style="{ backgroundImage: 'url(' + require('@/assets/header.jpg') + ')' }">
  <!-- <div class="circular" :style="{ backgroundImage: 'url(' + image + ')' }"> -->
    <div class="header-top">
      <div class="header-title">monthlylunch.com</div> 
      <div class="nav-link" v-if="!isLoggedInLocal"><router-link to="/login">Login</router-link></div>
      <div class="nav-link" v-if="isLoggedInLocal" @click="logoutLocal">Logout {{ userEmail }}></div>
    </div>
    <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/example">Example</router-link></li>
          <li><router-link to="/cssmenu">CssMenu</router-link></li>
          <li v-if="isLoggedInLocal" id="group-dropdown" class="thumbnail">Groups
              <!-- <a class="thumbnail" href="#"><img src="http://dummyimage.com/150x150/0066ff/fff"></a> -->
              <!-- <div id="title1">filename.jpg</div> -->
            <div id="title">
            <!-- <div id="dropdown"> -->
                <router-link to="/groups">My First Group</router-link>
            </div>
          </li>
          <li><router-link to="/creategroup">Create Group</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!-- <div class="spacer"></div> -->
          
        </ul>
    </nav>

  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'navigation',
  data () {
    return {
      msg: 'Navigation',
      onpage: 0,
      isDropdown: false,
      image: "../assets/header.jpg"
    }
  },
  computed: {
    isLoggedInLocal() {
        return this.$store.getters.isLoggedIn;
    },
    userEmail() {
                if (this.isLoggedInLocal) {
                    return this.$store.getters.currentUser.email;
                } else {
                    return '';
                }
            },
  },
  methods: {
           ...mapActions(['logout']),
          logoutLocal() {
            this.logout();
          }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.thumbnail {
	display: block;

	width: 150px;
	height: 150px;
}

.thumbnail:hover + #title {
	display: block;
}

#title {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: center;
  
  width: 130px;
  padding: 10px;
}


nav a.router-link-exact-active {
   font-weight: 700;
   color: red;
}
.router-exact-link-active {color: red;}
/* .active { color: red;} */
nav { color: black; padding: 30px 0; font-size: 16px;}
nav {
    /* opacity: 0.0;
   filter: alpha(opacity=50); For IE8 and earlier */
    background: rgba(204, 204, 204, 0.0);
}
ul {
  list-style: none;
}
nav {
  display: flex;
  /* width: 1200px; */
  max-width: 100%;
  margin: 0 auto;
}

nav ul {
  display: flex;
}
nav ul:first-child {
  flex: 3;
}

nav ul:last-child {
  flex: 2;
  margin-left: 50px;
}
nav ul li a{
}
nav ul li {
  flex: 1 0 100px;
  color: #dcd9d9;
  background: rgba(51, 49, 49, 0.535);
  text-align: center;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid #888;
  margin-right: 30px;
  border-radius: 5px;
  display: block;
  font-size: 1.6em;
  text-transform:uppercase;
}

.navigation{

}
.spacer {
  flex-grow: 1;
}
.header-top{
  display: flex;
}
.nav-link{
  margin: 4px;
  padding: 5px;
  font-size: 10px;
  background: #59808a;
  padding: 5px;
  border-radius: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
}
.circular{
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: 30vh;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  margin: 0;
}
nav ul li a:hover{ background: blue; color: white;}
nav ul li:hover{ background: blue; color: white;}
#dropdown{
  display: none;
}
#group-dropdown:hover +  #dropdown{
  display: inline-block;
}
.header-title{
  font-size: 6vw;
  color: #ff4900;
  text-shadow: 0px 0px 26px rgba(0, 0, 0, 1);
  /* width: 100vw; */
  padding: 5px 20px;
  text-transform: uppercase;
  text-align: start;
    font-weight: 700;
    letter-spacing: 5px;
  clear: right;
}
.log-status{
  font-size: 10px;
  background: #59808a;

}
@media screen and (max-width: 767px) {
  nav {
    flex-direction: column;
  }
  
}
</style>

