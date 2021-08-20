<template>
	<div class="layout02">
		<section class="container">     
			<div class="nav-wrap">
				<navbar></navbar>
			</div>
			<app-main class="contents"></app-main>
		</section>
	</div>      
</template>

<script>
import { AppMain } from "./components";
import Navbar from "../Navbar";
export default {
      components:{
            AppMain,
            Navbar
      }
}
      
</script>
