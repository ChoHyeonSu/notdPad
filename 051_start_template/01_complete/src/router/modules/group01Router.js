import Group01Layout from "@/layout/group01";
import Board from "@/views/group01/Board";
import Sample from "@/views/group01/Sample";

const group01Router = { 
	path:"/group01",
	name:"group01",
	component:Group01Layout,
	children: [
		{
			path: "",			
			redirect: "board",
		},
		{
			path: "board",
			name:"group01Board",
			component: Board,
		},{
			path: "sample",
			name:"group01Sample",
			component: Sample,
		},
	],
}

export default group01Router;