import HomeLayout from "@/layout/home";
import ImageCard from "@/views/group02/ImageCard";

const group02Router = {
	path:"/group02",
	name:"group02",
	component:HomeLayout,
	children: [
		{
			path: "",			
			redirect: "/group02/home",
		},
		{
			path: "/group02/home",
			name:"group02ImageCard",
			component: ImageCard
		},
	],
}

export default group02Router;