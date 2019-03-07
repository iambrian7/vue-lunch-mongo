// import Vue from 'vue'
// import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import CreateGroup from '@/components/CreateGroup'
import Example from '@/components/Example'
import Groups from '@/components/Groups'
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import CssMenu from '@/components/CssMenu.vue';

export const routes = [
	{path: '/', component: Home, name: 'home'},
  {path: '/about',name: 'About',component: About},
  {path: '/example',name: 'Example',component: Example},
  {path: '/groups',name: 'Groups',component: Groups},
  {path: '/cssmenu',name: 'CssMenu',component: CssMenu},
  {path: '/creategroup',name: 'CreateGroup',component: CreateGroup},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '*', redirect: '/' }
];

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   router: routes
// })
