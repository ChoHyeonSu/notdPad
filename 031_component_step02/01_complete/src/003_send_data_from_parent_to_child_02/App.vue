<template>
	<div id="app">
		<p>
			<button @click="onAddMemo" >메모 추가</button>
		</p>
		<list-component :list="list" :setSelectedMemo="setSelectedMemo" :selectedIndex="selectedIndex"></list-component>
		<view-component :memo="selectedMemo"></view-component>
	</div>
</template>

<script>
	/*
        지역 컴포넌트 사용
    */
	import ListComponent from "./components/ListComponent";
	import ViewComponent from "./components/ViewComponent";

	export default {
		data(){
			return {
				list:["memo1", "memo2"],
				selectedMemo:"",
				selectedIndex:0
			}
		},
		components: {
			ListComponent,
			ViewComponent
		},
		created(){
			this.setSelectedMemo(0);
		},
		methods:{
			setSelectedMemo(index){
				this.selectedIndex=index;
				this.selectedMemo= this.list[index];

			},
			onAddMemo(){
				this.list.push("memo"+(this.list.length+1));
			}
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
