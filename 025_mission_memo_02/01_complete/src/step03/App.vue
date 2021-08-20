<template>
    <div id="app">

        <list-page :list="list" v-if="mode=='list'" :setReadMemo="setReadMemo"></list-page>
        <read-page v-if="mode=='read'"  :current-memo="selectedMemo"></read-page>

        <p>
            {{selectedMemo}}
        </p>
    </div>
</template>

<script>


    import ListPage from "./pages/ListPage";
    import ReadPage from "./pages/ReadPage";

    const MODE={
        LIST:"list",
        READ:"read"
    }
    export default {
        name: 'app',
        components: {
            ListPage,
            ReadPage
        },
        data(){
            return {
                list:["memo1","memo2", "memo3"],
                mode:MODE.LIST,
                selectedMemo:""
            }
        },

        methods:{

            setReadMemo(index){
                this.selectedMemo = this.list[index];
                console.log(this.selectedMemo, index);
                this.mode= MODE.READ;
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
