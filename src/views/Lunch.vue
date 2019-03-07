<template>
  <div class="lunch green darken-2">
    <h1>This is an lunch page</h1>
    <v-img
          :src="require('../assets/TessMax.jpg')"
          class="my-3"
          contain
          height="200"
        ></v-img>

        <!-- <template> -->
    <v-flex xs6 offset-xs3>
        <v-form @submit.prevent="submit"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <!-- <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field> -->

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn color="error" @click="reset">
            Reset Form
          </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
          <v-btn color="yellow" type="submit" @submit.prevent="submit">
            Submit
          </v-btn>
        </v-form>
  </v-flex>

  <v-btn color="info" @click="targetFunction">Info</v-btn>
  <v-btn color="warning" @click="resettargetFunction">Reset</v-btn>
  <div class="list-items" v-for="(i, index) in listItems" :key="index">
    {{i.title}}
  </div>

 <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
  <v-flex xs3>
  <!-- <v-flex v-for="i in 3" :key="`4${i}`" xs4> -->
    <v-card dark color="primary">
      <v-card-text class="px-0">
        <grid-data
          :heroes="lunches"
          :columns="lunchColumns"
          :filter-key="searchQuery">
        </grid-data>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs5>
  <!-- <v-flex v-for="i in 3" :key="`4${i}`" xs4> -->
    <v-card color="primary">
      <v-card-text class="px-0">


<h2>Lunches</h2>  Search <input class="search" type="text">
 <div class="edit-lunch" v-if="editLunch">
   Name: {{editLunch.name}}
   Date: {{editLunch.date}}
   Owner: {{editLunch.owner}}
 </div>
 <ul class="my-lunches">
   <li v-for="(lunch, index) in lunches" :key="index" @click="processLunch(lunch)">
     {{index+1}}  {{lunch.date}}  {{lunch.restaurant}} ({{lunch.owner}})
     </li>
 </ul>

      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs4>
  <!-- <v-flex v-for="i in 3" :key="`4${i}`" xs4> -->
    <v-card color="primary">
      <v-card-text class="px-0">4</v-card-text>
    </v-card>
  </v-flex>


  </v-layout>
  </v-container>


 
  </div>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService'
import LunchService from '@/services/LunchService'
  import Grid from '../components/grid-data'
export default {
  components: {
    "grid-data": Grid
  },
  data () {
    return {
      searchQuery: '',
    gridColumns: ['name', 'power'],
    lunchColumns: ['date', 'restaurant','owner'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ],
      email: '',
      password: '',
      error: null,
      targetItems: ["One","Two","Three","Four"],
      listItems: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
        ],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false,
      lunches: null,
      editLunch: null
    }
  },
  methods: {
    processLunch(lunch){
      console.log(`edit: ${JSON.stringify(lunch, null,3)}`)
      this.editLunch = {
        name: lunch.restaurant,
        date: lunch.date,
        owner: lunch.owner
      }
    },
    submit(){
      console.log("submit............")
    },
    resettargetFunction(){
      this.items = []
    },
    targetFunction(){
      console.log('targetFunction.........')
      this.test1(0,this.targetItems.length)
      
    },
    test1(index, limit){
      console.log(`test1 index=${index} limit=${limit}`)
      var self = this
      // this.listItems.push( { divider: true, inset: true })
      this.listItems.push( {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: `Summer BBQ ${this.targetItems[index]}${this.items.length}<span class="grey--text text--lighten-1">4</span>`,
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          })
      setTimeout(function(){
        if (index < limit){
          self.test1(++index, limit)
        }
      },1000)
    },
    // async login () {
    //   try {
    //     const response = await AuthenticationService.login({
    //       email: this.email,
    //       password: this.password
    //     })
    //     // this.$store.dispatch('setToken', response.data.token)
    //     // this.$store.dispatch('setUser', response.data.user)
    //     // this.$router.push({
    //     //   name: 'songs'
    //     // })
    //   } catch (error) {
    //     this.error = error.response.data.error
    //   }
    // },
    validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
  },
  async mounted () {
    this.lunches = (await LunchService.index()).data
    console.log(`got all lunches cnt=${this.lunches.length}`)
  }
}
</script>
<style>
.search{
  font-size: 2em;
  background: white;
  border: 1px solid black;
  color: black;
}
.lunch{
  height: 100vh;
}
.my-lunches{
  height: 500px;
  max-width: 500px;
  margin: 20px;
  padding: 10px;
  background: burlywood;
  overflow-y: scroll;
}
.my-lunches li {
  font-size: 1.2em;
  padding: 3px 15px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}
.my-lunches li:hover{
  font-size: 1.4em;
  background: yellow;
  padding: 10px 25px;
}
</style>
