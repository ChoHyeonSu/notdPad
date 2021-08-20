<template>
    <div>
        <header-component title="리스트 페이지"></header-component>
        <div>
            리스트 콘텐츠
            <ul>
                <li v-for="(memo, index) in list" @click="setReadMemo(index)">{{index}}. {{memo}}</li>
            </ul>
        </div>
        <div>
            <button @click="setMode(MODE.WRITE)">메모 추가</button>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import {MODE} from "../common";
    export default {

        props:{
            list:{
                type:Array,
                default:[]
            },
            setReadMemo:{
                type:Function
            },
            setMode:{
                type:Function,
                default:()=> {
                    console.log("이 함수는 재정의 해야합니다.")
                }
            }
        },
        data(){
            return {
                MODE:MODE
            }
        }
    }
</script>


<style scoped>

</style>
