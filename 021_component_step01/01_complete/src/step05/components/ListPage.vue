<template>
      <div>
            <list-header></list-header>
            <div>
                  <ul>
                        <li v-for="memo in list" :key="memo">{{memo}}</li>
                  </ul>
            </div>
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
      },
      data(){
            return {
            
            }
      },
      props:{
            list:{
                  type:Array,
                  required:true
            }
      }
      
}
</script>

<style>

</style>