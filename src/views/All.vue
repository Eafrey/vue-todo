<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="ID"
                width="180">
        </el-table-column>
        <el-table-column
                prop="content"
                label="Content"
                width="180">
        </el-table-column>
        <el-table-column
                prop="complete"
                label="Compelete">
        </el-table-column>
        <el-table-column
                prop="readOnly"
                label="ReadOnly">
        </el-table-column>
        <el-table-column
                prop="date"
                label="Date">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "All",
        mounted() {
        },
        data() {
            return {
                tableData: this.$store.state.todos
            };
        },
    }
</script>

<style scoped>

</style>

