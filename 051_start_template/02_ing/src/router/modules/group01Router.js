import Group01Layout from "@/layout/group01";
import Board from "@/views/group01/Board";

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
		}
		//??
	],
}

export default group01Router;