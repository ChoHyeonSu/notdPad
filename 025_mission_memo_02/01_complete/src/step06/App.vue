<template>
    <div id="app">

        <list-page :list="list" 
            v-if="mode==MODE.LIST" 
            :setReadMemo="setReadMemo"
            :setMode="setMode"
            ></list-page>
        <read-page v-if="mode==MODE.READ"  
            :current-memo="selectedMemo"
            :setMode="setMode"></read-page>
         <write-page v-if="mode==MODE.WRITE"
            :setMode="setMode"
            :add-memo="addMemo">

        </write-page>

    </div>
</template>

<script>


    import ListPage from "./pages/ListPage";
    import ReadPage from "./pages/ReadPage";
    import WritePage from "./pages/WritePage";
    import {MODE} from "./common";
    export default {
        name: 'app',
        components: {
            ListPage,
            ReadPage,
            WritePage
        },
        data(){
            return {
                list:["memo1","memo2", "memo3"],
                mode:MODE.LIST,
                selectedMemo:""
            }
        },
        computed:{
            MODE(){
                return MODE;
            }
        },
        methods:{
            //step #04
            setMode(mode){
                this.mode= mode;
            },
            // step #06
            addMemo(memo){
                this.list.push(memo)
            },

            setReadMemo(index){
                this.selectedMemo = this.list[index];
                console.log(this.selectedMemo, index);
                this.setMode(MODE.READ);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
