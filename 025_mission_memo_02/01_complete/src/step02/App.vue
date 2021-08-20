<template>
    <div id="app">
        <list-page :list="list"></list-page>
    </div>
</template>

<script>


    import ListPage from "./pages/ListPage";

    export default {
        name: 'app',
        components: {
            ListPage
        },
        data(){
            return {
                list:["memo1","memo2", "memo3"]
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
