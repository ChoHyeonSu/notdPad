<template>
    <div>
        <header-component title="리스트 페이지"></header-component>
        <div>
            리스트 콘텐츠
            <ul>
                <li v-for="(memo, index) in list" @click="setReadMemo(index)">{{index}}. {{memo}}</li>
            </ul>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>

    export default {

        props:{
            list:{
                type:Array,
                default:[]
            },
            setReadMemo:{
                type:Function
            }
        }
    }
</script>


<style scoped>

</style>
