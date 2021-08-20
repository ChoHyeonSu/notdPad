<template>
      <div class="test1">
            <list-header></list-header>
            리스트 페이지 입니다.
            <ListFooter></ListFooter>
      </div>
</template>

<script>
import ListHeader from "./ListFooter";
import ListFooter from "./ListFooter";
export default {
      name:"sample",
      components:{
            ListHeader,
            ListFooter
      },
      created(){
            console.log(this.$options.name)
      }
}
</script>

<style scoped>
      .test1 {
            font-size:20px;
      }
</style>