<template>
      <div>
            <list-header></list-header>
            <div>리스트 페이지2---------- 입니다.</div>
            <SamplePage></SamplePage>
            <ListFooter></ListFooter>
      </div>
</template>

<script>
import ListHeader from "./ListFooter";
import ListFooter from "./ListFooter";
export default {
      components:{
            ListHeader,
            ListFooter
      }
}
</script>

<style>

</style>