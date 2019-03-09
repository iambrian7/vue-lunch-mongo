<template>
<div id="makelunch">
    <h2>Make Lunch</h2>
    <p>Add info to make a lunch date.</p>
    <ul>
      <li>Restraunt Name</li>
      <li>Address</li>
      <li>Date</li>
      <li>Time</li>
      <li>Host </li>
    </ul>
    
    <div class="container">
      <form @submit.prevent="checkForm">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </p>
      
        <div class="row"> 
          <div class="col-25">
            <label for="restaurant">Restauant Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="restaurant" v-model="restaurant" placeholder="Restauant name..">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="address">Address</label>
          </div>
          <div class="col-75">
            <input type="text" id="address" v-model="address" placeholder="address.." @blur="blurAddress">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="date">Date</label>
          </div>
          <div class="col-75">
            <input type="date" id="date" v-model="date" placeholder="date...">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="time">Time</label>
          </div>
          <div class="col-75">
            <input type="text" id="time" v-model="time" placeholder="time..">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="owner">Host</label>
          </div>
          <div class="col-75">
            <select id="owner" name="owner" v-model="owner">
              <option value="brian">Brian</option>
              <option value="brian">Mark</option>
              <option value="brian">Ben</option>
              <option value="brian">Chris</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="notes">Notes</label>
          </div>
          <div class="col-75">
            <textarea id="notes" name="notes" placeholder="Write something.."  v-model="notes" style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit">
        </div>
      </form>
    </div>    
</div>
<!-- "date":"1/17/2019",
      "restaurant":"Augustine's Bar and Bakery",
      "owner":"Mark",
      "address":"1668 Selby Ave, St Paul, MN 55104, USA",-->
</template>
      
      <script>
     // import { mapActions } from 'vuex';
      export default {
        name: 'makelunch',
        data () {
          return {
            errors: [],
            date: null,
            restaurant: null,
            address: null,
            owner: null,
            time: '11:30am',
            notes: ''
          }
        },
        computed: {
        },
        methods: {
          updateCoordinates (value) {
              if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
                this.geocoder.geocode({'address': value}, (results, status) => {
              // this.geolocation.geocoder.geocode({'location': value}, (results, status) => {
                  if (status === 'OK' && results[0]) {
                      if (results[0]) {
                        console.log(`found address: ${JSON.stringify(results[0], null, 4)}`)
                        // this.$emit('placechanged', this.formatResult(results[0]), results[0], this.id);
                        // this.update(results[0].formatted_address);
                      } else {
                          console.log('error', 'no result for provided coordinates');
                      }
                  } 
              })
          },
          blurAddress(){
            console.log("blurAddress.....................")
            if (this.address.length > 5){
              var searchtext = this.address
              if (this.restaurant.length > 5){
                searchtext = this.restaurant + ' ' + searchtext
              }
              this.updateCoordinates(searchtext)
            }
          },
          checkForm: function (e) {
            this.errors = [];
            console.log(`date: ${this.date}`)
            var d = new Date(this.date)
            console.log(`date: fullYear= ${d.getFullYear()}`)
            
            if (this.date && this.restaurant) {
              return true;
            }
            if (!this.date) {
              this.errors.push('Date required.');
            }
            if (!this.restaurant) {
              this.errors.push('Restaurant name required.');
            }
          }
      },
      // created: {
      // }
    }
  </script>
      
      
<style scoped>
      * {
        box-sizing: border-box;
      }

      input[type=text],input[type=date], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
      }

      label {
        padding: 12px 12px 12px 0;
        display: inline-block;
      }

      input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }

      input[type=submit]:hover {
        background-color: #45a049;
      }

      .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }

      .col-25 {
        float: left;
        width: 25%;
        margin-top: 6px;
      }

      .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
      }

      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }

      /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
      @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
          width: 100%;
          margin-top: 0;
        }
      }
</style>
      
      