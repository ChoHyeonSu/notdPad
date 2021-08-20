<template>
	<div id="app">
		<h1>자식에서 부모로 데이터 보내기</h1>

		<div>
			child에서 보내온 정보 출력  {{message}}
		</div>
		<parent-component></parent-component>
	</div>
</template>

<script>

	/*
        -  깊은 부모 - 자식 - 형제 간의 데이터 주고 받기
                  new Vue()를 활용한 전역 객체 생성 후 이벤트 등록, 발생 처리
                  $on() - 이벤트 등록
                  $emit() - 이벤트 발생
    */


	import ParentComponent from "./components/ParentComponent";
	import $globalBus from "./globalBus";


	export default {
		data(){
			return {
				message:""
			}
		},
		created(){
			??
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
