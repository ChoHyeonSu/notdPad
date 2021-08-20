<template>
	<div id="app">
		<div>
			<button @click="getCount1">1번째 count 값 알아내기</button>
			<button @click="getCount2">2번째 count 값 알아내기</button>
			<button @click="getInput1">input1 포커스 이동</button>
		</div>
		<div>
			<sample-component ref="sample1"></sample-component>
			<sample-component ref="sample2"></sample-component>
		</div>

		<div>
			<parent-component ref="parent"></parent-component>
		</div>

	</div>
</template>

<script>

	/*
        - 이름(레퍼런스)으로 컴포넌트를 접근하고 할때
        	ref 사용
		- 접근 방법
			$refs.레퍼런스 명
    */

	import ParentComponent from "./components/ParentComponent";
	import SampleComponent from "./components/SampleComponent";
	import Vue from "vue";
	export default {
		data(){
			return {
				message:""
			}
		},
		created(){

		},
		components: {
			ParentComponent,
			SampleComponent,

		},
		methods:{
			getCount1(){
				alert(this.$refs.sample1.count);
			},
			getCount2(){
				alert(this.$refs.sample2.count);
			},
			getInput1(){
				this.$refs.parent.$refs.child.$refs.input1.focus();

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
