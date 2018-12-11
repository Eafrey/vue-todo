<template>
    <el-menu :default-active="activeIndex" mode="horizontal" :router="isRouter">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/all">All</el-menu-item>
        <el-menu-item index="/todo">Todo</el-menu-item>
        <el-menu-item index="/done">Done</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex : 1,
                isRouter: true
            }
        }
    }
</script>

<style scoped>

</style>