<template>
    <el-menu :default-active="1" mode="horizontal" router="true">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/all">All</el-menu-item>
        <el-menu-item index="/todo">Todo</el-menu-item>
        <el-menu-item index="/done">Done</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>