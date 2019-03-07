<template>
    <div id="groups">
        <h1>{{msg}}</h1>
      <!-- <div class="lunch-list">
          <div class="lunch" v-for="(lunch, i, index) in products" :key="i">
              Index: {{ index}}.  Date: {{ lunch.date}} Name: {{ lunch.name}} Owner: {{ lunch.owner }} 
           <p>{{lunch.addr}}</p>
            </div>
      </div> -->
    </div>
  </template>
  
  <script>
 // import Nav from '@/components/navigation'
  export default {
    name: 'Groups',
    // components: {
    //   'nav-lunch': Nav
    // }
    data () {
    return {
      msg: 'Groups Page'
    }
  },
  computed: {
		// 	products() {
    //     var p = this.$store.getters.products
    // //    debugger
    //     var sortable = [];
    //     for (var lunch in p) {
    //         sortable.push(Object.assign({_id:lunch}, p[lunch]))
    //     }
    //   //  console.log(`array: ${JSON.stringify(sortable, null, 3)}`)
    //     sortable.reverse(function(a, b) {
    //         return a.date - b.date;
    //     });
    //     return sortable
    //     // var myLunches = Object.keys(p).sort(function(a,b){
    //     //  var datea = p[a].date
    //     //  var dateb = p[b].date
    //     //  // console.log(mydate)

    //     //   return dateb - datea
    //     //         })
		// 		// return myLunches
		// 	},
		// 	loading() {
		// 		console.log("isLoading", this.$store.getters.isProductLoading);
		// 		return this.$store.getters.isProductLoading;
		// 	}
	//	},
  // products() {
	// 			return this.$store.getters.products;
	 		},
  }
  </script>
  
  <style>
  body, html {
      height: 100%;
  }
  .lunch{
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 10px;
    background: yellow;
    text-align: left;
    width: 50%;
  }
  .lunch p{
    font-size: 0.8em;
    font-style: italic;
    font-weight: 800;
    text-align: right;
    padding: 0 20px 0 0;
  }
  </style>
  