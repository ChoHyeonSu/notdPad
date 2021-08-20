<template>
      <div>
            <div><button @click="toggle()">토글-{{sw}}</button> <button @click="addMessage()">데이터 변경</button></div>
            <div >1. message = {{message}} </div>

            <div>2. computed = {{reversedMessage}} </div>
            <div>3. methods  = {{reversedMessage2()}} </div>
      </div>
</template>

<script>
export default {      
      data(){
            return {
                  count:7,
			message:"1,2,3,4,5,6,7",
                  sw:false
            }
      },
      computed:{
            reversedMessage(){
                  console.log("test1");
                  return this.message.split(",").reverse().join("_");
            }
      },
      methods:{
            toggle(){
                  this.sw = !this.sw;
                  return this.sw;
            },
            addMessage(){
                  this.count++;
                  this.message+=","+this.count;
            },
            reversedMessage2(){
                  console.log("test2");
                  return this.message.split(",").reverse().join("_");
            }
	}
}
</script>

<style>

</style>