<template>
	<div id="app">
		<h1>부모에서 자식으로 데이터 보내기</h1>
		<parent-component></parent-component>
	</div>
</template>

<script>

	/*
        지역 컴포넌트 사용
    */


	import ParentComponent from "./components/ParentComponent";

	export default {
		data(){
			return {
			}
		},
		components: {
			ParentComponent
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
