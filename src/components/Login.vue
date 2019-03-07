<template>
    <div id="login">
        <h1>{{msg}}</h1>
    </div>
  </template>
  
  <script>
 // import Nav from '@/components/navigation'
  export default {
    name: 'Login',
    // components: {
    //   'nav-lunch': Nav
    // }
    data () {
    return {
      msg: 'Login Page'
    }
  },
  }
  </script>
  
  <style>
  body, html {
      height: 100%;
  }
  </style>
  