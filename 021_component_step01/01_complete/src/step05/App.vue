<template>
	<div id="app">
		<list-page :list="list"></list-page>
	</div> 
</template>

<script>

/*
	지역 컴포넌트 사용
*/
import ListPage from "./components/ListPage";

export default {
	data(){
		return {
			list:["memo1", "memo2", "memo3", "memo4"]
		}
	},
	components: {
		ListPage
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
