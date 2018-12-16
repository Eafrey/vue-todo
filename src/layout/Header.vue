<template>
    <div>
        <h1 class="title">Todo list</h1>
        <!--<el-menu :default-active="activeIndex" mode="horizontal" :router="isRouter">-->
            <!--<el-menu-item index="/">Home</el-menu-item>-->
            <!--<el-menu-item index="/add">AddTodo</el-menu-item>-->
            <!--<el-menu-item index="/todo">Todo</el-menu-item>-->
            <!--<el-menu-item index="/done">Done</el-menu-item>-->
        <!--</el-menu>-->
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: 1,
                isRouter: true
            }
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
    }
</style>