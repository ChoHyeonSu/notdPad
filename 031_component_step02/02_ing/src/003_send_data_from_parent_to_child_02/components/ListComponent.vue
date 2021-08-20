<template>
    <div class="parent">
        <ul>
            <li v-for="(memo,index) in list" ?? ??>{{index}}. {{memo}}</li>
        </ul>


    </div>
</template>

<script>

    export default {
        name:"parent",
        data(){
            return {

            }
        },

        methods:{

        },

        props:{
            list:{
                type:Array,
                default:[]
            },
            ??,
            ??,

        }

    }
</script>

<style scoped>
    .parent {
        border:1px solid #000000;
        margin:10px;
    }
    .selected {
        color:#f00;
    }
</style>