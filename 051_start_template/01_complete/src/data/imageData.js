
function createImageList() {
	let data = [
		{
			id:"Image01",
			title:"image 01",
			url: "https://picsum.photos/300/300/?image=41", 
			text:"This is a wider card with supporting text below as a natural lead-in to additional content.  This content is a little bit longer.", 
			date: "Last updated 3 mins ago"
		}, {
			id:"Image02",
			title:"image 02",
			url: "https://picsum.photos/300/300/?image=41", 
			text:"This card has supporting text below as a natural lead-in to additional content.", 
			date: "Last updated 3 mins ago"
		}, {
			id:"Image03",
			title:"image 03",
			url: "https://picsum.photos/300/300/?image=41", 
			text:"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.", 
			date: "Last updated 3 mins ago"
		}
	];			
	return data;
}
const imageList = createImageList();

export default imageList; 