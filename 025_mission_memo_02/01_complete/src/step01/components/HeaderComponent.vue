<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:""
            }
        }
    }
</script>

<style scoped>
    .header {
        height:40px;
        background-color:#eeeeee;
    }
</style>