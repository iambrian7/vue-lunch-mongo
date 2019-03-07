<template>
    <div id="about">
      <h1>{{msg}}</h1>
      <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/example">Example</router-link></li>
            <li><router-link to="/creategroup">Create Group</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <!-- <div class="spacer"></div> -->
            
            <li class="thumbnail">Groups
              <div id="title">
                <router-link to="/groups">My First Group</router-link>
              </div>
            </li>
          </ul>
      </nav>
    </div>
  </template>
  
  <script>
  // import Nav from '@/components/navigation'
  export default {
    name: 'About',
    // components: {
    //   'nav-lunch': Nav
    // },
    data () {
    return {
      msg: 'About Page',
      isLoggedInLocal: true,
    }
  },
  }
  </script>
  
  <style>

    #about nav ul {
      display: flex;
    }
    #about nav ul li a {
      text-decoration: none;
    }
    #about nav ul li {
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
  .thumbnail {
	display: block;
  font-size: 40px;
  background: orange;
	/* width: 150px;
	height: 150px; */
}

.thumbnail:hover > #title {
	display: inline-block;
}

#title {
	display: none;

	color: #ffffff;
	background-color: #000000;
  text-align: center;
  
  width: 130px;
  /* padding: 10px; */
}
  </style>
  