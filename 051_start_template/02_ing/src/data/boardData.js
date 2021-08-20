function createBoardList() {
	let data = [];
	for (var i = 1; i <=10; i++) {
		data.push({
			no: i,
			id: "board item_" + i,
			title: "게시물 " + i,
			created: "2020.05.21",
			hits:"10"
		})
	}
	return data;
}
const boardData = createBoardList();
export default boardData;