<template>
    <div class="parent">

        부모 컴포넌트
        <child-component ??></child-component>

    </div>
</template>

<script>

    import ChildComponent from "./ChildComponent";

    export default {
        components:{
            ChildComponent
        },

        data() {
            return {
                count:1
            }
        },

        methods: {
            onAddCount() {
                this.count++;
            }
        }
    }

</script>

<style scoped>
    .parent {
        border:1px solid #000000;
        margin:10px;
    }
</style>