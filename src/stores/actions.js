import Vue from 'vue';
import { ref, firebaseAuth } from '../config/firebaseConfig';
export function addGroup({commit},group) {
// export function addGroup({commit},{name,email,location}) {

	var usersRef = ref.child("lunchgroups");
	var g = {}
	g[group.email.split('@')[0]] = group
	console.log(`save to firebase ${JSON.stringify(g, null, 3)}`)

	usersRef.set(g);
			// usersRef.push(group);
	console.log(`save to firebase ${JSON.stringify(g, null, 3)}`)

		// commit('UPDATE_PRODUCT_LIST', products.val());

}

export const updateCart = ({commit}, {item, quantity, isAdd}) => {
	// TODO: Call service
	commit('UPDATE_CART', {item, quantity, isAdd});
	if (isAdd) {
		let message_obj = {
		  message: `Add ${item.title} to cart successfully`,
		  messageClass: "success",
		  autoClose: true
		}
		commit('ADD_MESSAGE', message_obj);
	}
}

export const removeItemInCart = ({commit}, {item}) => {
	commit('REMOVE_CART_ITEM', {item});
}

export const registerByEmail = ({commit}, {email, password}) => {
	return firebaseAuth().createUserWithEmailAndPassword(email, password);
}

export const logout = ({commit}) => {
  commit('SET_CART', []); // clear current cart
  return firebaseAuth().signOut();
}

export function loginWithEmail ({commit}, {email, password}) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}

export function listenToGroups({commit}) {
	// return ref.child("products").on('value', (products) => {
		return ref.child('lunchgroups').on('value', (groups) => {
			var g = groups.val();
		  var k = Object.keys(g)[0]
			var v = g[k]
			console.log(`listen to groups: key=${k}  group=${g}  value=${v}`)
		console.log(JSON.stringify(v));
		commit('UPDATE_GROUPS_LIST', v);
	});
}
export function listenToProductList({commit}) {
	//	var usersRef = ref.child("lunchgroups");
	return ref.child('web/data/lunches').on('value', (products) => {
	// return ref.child("products").on('value', (products) => {
		console.log("listenToProductList******************************");
		console.log(products.val());
		commit('UPDATE_PRODUCT_LIST', products.val());
	});
}

export function getShoppingCart({commit}, {uid, currentCart}) {
	if (uid) {
		return ref.child("cart/" + uid).once('value').then((cart) => {
			// console.log(cart.val());
			if (cart.val() && (!currentCart || currentCart.length == 0)) {
				commit('SET_CART', cart.val());
			}
		});
	} else {
		console.log("User has not logged in");
	}
}

export function saveShoppingCart({commit}, {uid, cartItemList}) {
	// console.log("ACTIONS saveShoppingCart");
	// console.log("CART DATA", cartItemList);
	return ref.child("cart/" + uid).set(cartItemList);
}

export function saveToTransaction({commit}, {uid, cartItemList}) {
	let newTransactionKey = ref.child("transactions").push().key;
	var newTransaction = {}
	newTransaction['/transactions/' + uid + '/' + newTransactionKey] = cartItemList;
	return ref.update(newTransaction);
}
