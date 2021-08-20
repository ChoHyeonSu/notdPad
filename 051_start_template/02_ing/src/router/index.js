import Vue from "vue";
import VueRouter from "vue-router";
import group01Router from "./modules/group01Router"
 import group02Router from "./modules/group02Router";
import Home from "@/views/main/Home";
import Login from "@/views/login";
import homeLayout from "@/layout/home";
Vue.use(VueRouter);


const constantRoutes = [
	{
		path: "/",
		name: "main",
		component: homeLayout,
		children: [{
			path: "",
			name:"home",
				component: Home,
			},
		]
	},
	{
		path: "/login",
		name: "login",
		component: Login
	}
]


const router = new VueRouter({
	mode:"history",
	routes: [
		...constantRoutes,
		group01Router,
		group02Router,
	]
});

export default router;
