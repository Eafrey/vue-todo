<template>
    <div class="container">
        <el-button class="add-button" @click="addTodo">Add todo</el-button>
        <div class="filter">
            <span class="filter-name">Filter type:</span>
            <el-select v-model="type" placeholder="Select todo type" @change="filterType">
                <el-option label="type1" value="type1"></el-option>
                <el-option label="type2" value="type2"></el-option>
            </el-select>
            <span class="filter-name">Filter done status:</span>
            <el-checkbox @change="filterDoneStatus">
                Done
            </el-checkbox>
            <span class="filter-name">Filter title&content:</span>
            <el-input class="filter-input" v-model="fileteredText" @change="filterText" clearable/>
            <el-button class="filter-name" @click="clearFilter">Clear filter</el-button>
        </div>
        <el-table
                :data="tableData">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="Title"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="Type"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="Content"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="done"
                    label="Done status"
                    width="100">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.done" @change="onChange(scope.row)">
                        Done
                    </el-checkbox>
                </template>
            </el-table-column>
            <el-table-column
                    prop="createDate"
                    label="Create date"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="endDate"
                    label="End date"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="adaptable"
                    label="Adaptable"
                    width="100">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.adaptable" disabled>
                        Adaptable
                    </el-checkbox>
                </template>
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
                type: '',
                fileteredText: '',
            };
        },
        computed: {
            tableData() {
                return this.$store.getters.visibleTodos;
            }
        },
        mounted() {
            console.log('todos in home', this.$store.state.todos)
        },
        methods: {
            filterType(type) {
                this.$store.commit("filterType", type)
            },
            filterDoneStatus(done) {
                this.$store.commit("filterDoneStatus", done)
            },
            filterText(text) {
                this.$store.commit("filterText", text)
            },
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
                if (!row.adaptable) {
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
            clearFilter() {
                this.fileteredText = '';
                this.type = '';
                this.$store.commit("clearFilter")
            }
        }
    }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        width: 80%;
    }

    .add-button {
        display: block;
        margin: 0 auto;
    }

    .filter {
        margin: 20px 0;
    }

    .filter-name {
        margin-left: 30px;
        margin-right: 10px;
    }

    .filter-input {
        width: 200px;
    }
</style>