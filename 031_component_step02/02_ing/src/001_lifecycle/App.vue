<template>
	<div id="app">
		<h1>컴포넌트 라이프-사이클 테스트</h1>
		<div>
			<button @click="sw=true">컴포넌트 mount</button>
			<button @click="sw=false">컴포넌트 unmount</button>
		</div>

		<parent-component v-if="sw"></parent-component>
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
				sw:true
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
