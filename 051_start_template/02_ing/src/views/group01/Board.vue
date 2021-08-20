<template>
	<div>
		<div class="tblWrap">
			<b-table 
				:items="boardItemList"
				:fields="fields"				
				show-empty
				empty-text="No Data"
			>
				<template v-slot:table-colgroup="scope">
					<col :style="{ width: '90px' }">
					<col >
					<col :style="{ width: '150px' }">
					<col :style="{ width: '150px' }">
					<col :style="{ width: '150px' }">
				</template>     
			</b-table>

			<div class="btnWrap">
				<div class="right">
					<b-button variant="primary" class="normal">등록</b-button>
				</div>
			</div>
		</div>
		<div class="pagingWrap">
			<b-pagination v-model="currentPage" total-rows="3000" limit="10" align="center"></b-pagination>
		</div>
	</div>
</template>

<script>

	import boardData from "@/data/boardData";

	export default {
		computed: {
			boardItemList(){
				return boardData;
			}			
		},
		data(){
			return {
				currentPage: 3,//pagination 
                selectedDate: '',//datepicker
				fields: [ {key:'no', label:'번호'}, {key:"title", label:'제목'}, {key:'created', label:'등록일'}, {key: 'hits', label: '조회수'}]
			}
		},
		mounted() {
		}
	};
</script>
