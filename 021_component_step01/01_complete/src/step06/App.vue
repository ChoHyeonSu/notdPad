<template>
	<div id="app">
		<sample-page></sample-page>
	</div> 
</template>

<script>

/*
	지역 컴포넌트 사용
*/
import SamplePage from "./components/SamplePage";

export default {
	data(){
		return {
		}
	},
	components: {
		SamplePage
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
