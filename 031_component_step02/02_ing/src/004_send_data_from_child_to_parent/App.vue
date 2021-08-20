<template>
	<div id="app">
		<h1>자식에서 부모로 데이터 보내기</h1>
		<parent-component></parent-component>
	</div>
</template>

<script>

	/*
        - 이벤트 발생 :
                  this.$emit("이벤트명", 값)
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
