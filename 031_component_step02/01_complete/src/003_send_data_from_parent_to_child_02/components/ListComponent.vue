<template>
    <div class="parent">
        <ul>
            <li v-for="(memo,index) in list" 
            @click="setSelectedMemo(index)" 
            :class="{selected:index==selectedIndex}">{{index}}. {{memo}}</li>
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
            selectedIndex:{
                type:Number,
                default:0
            },
            setSelectedMemo:{
                type:Function,
                default:()=>{
                    console.log("override 해야함");
                }
            },

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