<template>
    <div>
        <header-component title="읽기 페이지"></header-component>
        <div>
            <p>
                선택 메모 = {{currentMemo}}
            </p>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>

    export default {
        props:{
            currentMemo:{
                type:String,
                default:""
            }

        }
    }
</script>


<style scoped>

</style>
