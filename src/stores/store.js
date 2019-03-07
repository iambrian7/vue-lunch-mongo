import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import products from './modules/products';
import groups from './modules/groups';

import * as actions from './actions';

Vue.use(Vuex);
export default  new Vuex.Store({
  state:{
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Tess', registered: false},
      {id: 3, name: 'Rocco', registered: false},
    ],
    // groups: [
    //   {
    //     name: "example",
    //     id: 1,
    //     creator: 'bkcgee@gmail.com',
    //     members: [
    //       {name: 'Brian', email: 'bkcgee@gmail.com'},
    //       {name: 'Ben', email: 'bkcgee@gmail.com'},
    //       {name: 'Chris', email: 'bkcgee@gmail.com'},
    //       {name: 'Mark', email: 'bkcgee@gmail.com'},
    //     ],
    //     schedule: []
    // }
    // ],
   },
    actions,
    modules: {
      auth,
      // cart,
      products,
      groups
    }
});
// export const store = new Vuex.Store({
//   state:{
//     registrations: [],
//     users: [
//       {id: 1, name: 'Max', registered: false},
//       {id: 2, name: 'Tess', registered: false},
//       {id: 3, name: 'Rocco', registered: false},
//     ],
//     groups: [
//       {
//         name: "example",
//         id: 1,
//         creator: 'bkcgee@gmail.com',
//         members: [
//           {name: 'Brian', email: 'bkcgee@gmail.com'},
//           {name: 'Ben', email: 'bkcgee@gmail.com'},
//           {name: 'Chris', email: 'bkcgee@gmail.com'},
//           {name: 'Mark', email: 'bkcgee@gmail.com'},
//         ],
//         schedule: []
//     }
//     ]
//   }
// })