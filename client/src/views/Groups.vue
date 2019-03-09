<template>
    <div id="groups">
        <h1>{{msg}}</h1>
        <div v-if="mygroups.length > 0" class="my-groups">
            Groups found: {{ Object.keys(mygroups).length}}
            <p v-for="group in mygroups">
              <ul>
                <li>Your group name: {{group.name}}</li>
                <li>Owner: {{group.email}}</li>
                <!-- <li>Owner: <span class="owner-name">{{group.email}}</span></li> -->
                <li>Location: {{group.location}}</li>
                <li>Add Members: <input type="text"></li>
                <li>Invite all members to join.</li>
                <li>Add first lunch: </li>
                <li></li>
              </ul>
            </p>
        </div>
        <div v-else class="no-groups">
          No Groups found
        </div>
    <!-- <div class="error-message" v-if="error.length > 0">{{ error }}</div>
    <div class="add-group">
      <button @click="addForm = !addForm">Add a Group?</button>
      <div v-if="addForm" class="add-form">
          <ul>
              <li>Your group name: <input type="text" v-model="group.name"></li>
              <li>Owner: <input type="text" v-model="group.email"></li>
              <li>Location: <input  class="location" type="text" v-model="group.location"></li>

              <li></li>
            </ul>
            <button @click='saveGroup'>Save</button>
      </div>
    </div> -->
    <make-lunch />
    </div>
  </template>
  
  <script>
  import MakeLunch from '@/components/MakeLunch'

  import { mapActions } from 'vuex';
  export default {
    name: 'CreateGroup',
    components: {
      'make-lunch': MakeLunch
    },
    data () {
    return {
      msg: 'Listing all groups',
      addForm: false,
      group: {
        name: 'MyGroup',
        email: 'myemail@gmail.com',
        location: '55343'
      },
      error: ''
    }
  },
  methods:{
    saveGroup(){
      //this.group = this.mygroups[0]
      console.log(`Save Group: ${JSON.stringify(this.group, null, 3)}`)
      if (this.group.location.length < 5){
        this.error = "location should be an address or zip code"
      } else {
        this.error = ''
        this.$store.dispatch('addGroup', this.group)
      }
    }
  },
  computed: {
    mygroups(){
     // debugger
      // if (this.isLoggedInLocal) {
          var groups = this.$store.getters.groups
          console.log(`mygroups: ${JSON.stringify(groups, null, 3)}`)
          return groups

      //   } else {
      //    // this.group.name = 'GroupLunch'
      //     return [] // 'GroupLunch';
      // }
    },
    
  },
  // created() {
    
  // }
  }
  </script>
  
  <style>
    ul {
      list-style: none;
    }
    .error-message{
      background: yellow;
      margin: 20px;
      border: 1px solid black;
      border-radius: 5px;
      font-size: 2em;
    }
    .my-groups{
      border: 1px solid black;
      background: #aa0;
    }
  </style>
  