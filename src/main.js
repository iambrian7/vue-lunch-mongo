// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './router'

import store  from './stores/store'
import { firebaseListener } from './config/firebaseConfig';

Vue.config.productionTip = false

Vue.use(VueRouter);


firebaseListener(authStatusChange);


const router = new VueRouter({
	mode: 'history',
	routes
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		// if (user) {
		// 	store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		// }
	}
	
}
