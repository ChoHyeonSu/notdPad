<template>
	<div>
		<div class="card-wrap">
			<div v-if="imageList && imageList.length>0">
				<b-card-group deck>
					<b-card v-for="(item, index) in imageList" :key="index" 
						:title="item.title" 
						:img-src="item.url" img-alt="Image" img-top>
					<b-card-text>
						{{item.text}}
					</b-card-text>
					<template v-slot:footer>
						<small class="text-muted">{{item.date}}</small>
					</template>
					</b-card>
				</b-card-group>
			</div>
			<div v-else class="no-data" style="height: 565px;">
				No Data
			</div>
		</div>
	</div>
</template>

<script>
	import imageData from "@/data/imageData";
	export default {
		computed: {
			imageList(){
				return imageData;
			}
		}
	};
</script>
