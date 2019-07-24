<template>
    <div id="login">
        <h1 @click='login'>{{msg}}</h1>
        <div class="container">
          
        </div>
    </div>
  </template>
  
  <script>
  // import GoogleMap from '@/components/googlemaps'
 // import Nav from '@/components/navigation'
  export default {
    name: 'Login',
    // components: {
    //   "google-map": GoogleMap
    // },
    data () {
    return {
      msg: 'Login Page',
     // lunches: null
    }
  },
  methods: {
    login(){
      console.log("onclickLogin-------------------------")
    }
  },
  computed: {
   
    },
  //   async mounted () {
  //   this.lunches = (await LunchService.index()).data
  //   console.log(` got all lunches cnt=${this.lunches.length}`)
  // }
  // products() {
	// 			return this.$store.getters.products;
	// 		},
  }
  </script>
  
  <style>
  body, html {
      height: 100%;
  }
  .container{
    display: flex;
  }
 
  </style>
  