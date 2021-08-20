<template>
    <div class="sample" @click="onAddCount()">

        {{count}}

    </div>
</template>

<script>
    export default {

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
    .sample {
        border:1px solid #000000;
        margin:10px;
    }
</style>