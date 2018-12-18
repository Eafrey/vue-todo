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
                    prop="title"
                    label="Title"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="Type"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="endDate"
                    label="End date">
            </el-table-column>
            <el-table-column
                    prop="adaptable"
                    label="Adaptable">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.adaptable" disabled="true">
                        Adaptable
                    </el-checkbox>
                </template>
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="Content">
            </el-table-column>
            <el-table-column
                    prop="done"
                    label="Done status">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.done" @change="onChange(scope.row)">
                        Done
                    </el-checkbox>
                </template>
            </el-table-column>
            <el-table-column
                    prop="createDate"
                    label="Create date">
            </el-table-column>
            <el-table-column
                label="Operation">
                <template slot-scope="scope">
                    <el-button @click="openTodo(scope.row)" type="text" size="small">Open</el-button>
                    <el-button @click="modifyTodo(scope.row)" type="text" size="small">Modify</el-button>
                    <el-button @click="deleteTodo(scope.row)" type="text" size="small">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                tableData: this.$store.state.todos,
            };
        },
        mounted() {
          console.log('todos in home', this.$store.state.todos)
        },
        methods: {
            onChange(row) {
                console.log('on change', row)
                this.$store.commit("modifyTodo", row);
            },
            addTodo() {
                this.$router.push('/add')
            },
            openTodo(row) {
                 this.$router.push(`/todo/${row.id}`)
            },
            modifyTodo(row) {
                if(!row.adaptable) {
                    this.$message({
                        message: "This todo cannot be modified!",
                        type: "error"
                    })
                    return;
                }
                this.$router.push(`/modify/${row.id}`)
            },
            deleteTodo(row) {
                this.$store.commit("deleteTodo", row.id)
            },
        }
    }
</script>

<style scoped>
    .add-button {
        display: block;
        margin: 0 auto;
    }
</style>