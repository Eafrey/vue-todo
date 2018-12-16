<template>
    <div>
        <el-button class="add-button" @click="addTodo">Add todo</el-button>
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
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                tableData: this.$store.state.todos
            };
        },
        methods: {
            addTodo() {
                this.$router.push('/add')
            }
        }
    }
</script>

<style scoped>
    .add-button {
        display: block;
        margin: 0 auto;
    }
</style>