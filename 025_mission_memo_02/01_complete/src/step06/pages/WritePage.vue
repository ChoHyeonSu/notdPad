<template>
    <div>
        <header-component title="쓰기 페이지"></header-component>
        <div>
            <textarea v-model="memo"></textarea>
            <div>
                <button @click="setMode(MODE.LIST)">취소</button>
                <button @click="onAddMemo">저장</button>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>

    import {MODE} from "../common";
    export default {
        data(){
            return {
                memo:""
            }
        },
        computed:{
            MODE(){
                return MODE;
            }
        },
        props:{
            addMemo:{
                type:Function,
                default:()=>{
                    console.log("이 함수는 재설정 해야합니다.")
                }
            },
            setMode:{
                type:Function,
                default:()=>{
                    console.log("이 함수는 재설정 해야합니다.")
                }
            }
        },
        methods:{
            onAddMemo(){
                this.addMemo(this.memo);
                this.setMode(MODE.LIST);
            }
        }

    }
</script>


<style scoped>

</style>
