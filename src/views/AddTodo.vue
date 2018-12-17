<template>
    <div>
        <h3 class="form-title">Creat an new todo</h3>
        <el-form :model="todo" :rules="rules" ref="todo" label-width="100px" class="demo-todo">
            <el-form-item label="Title" prop="title">
                <el-input v-model="todo.title"></el-input>
            </el-form-item>
            <el-form-item label="Type" prop="type">
                <el-select v-model="todo.type" placeholder="Select todo type">
                    <el-option label="type1" value="type1"></el-option>
                    <el-option label="type2" value="type2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="End date" required>
                <el-col :span="11">
                    <el-form-item prop="endDate">
                        <el-date-picker type="date" placeholder="Select date" v-model="todo.endDate"
                                        style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="Adaptable" prop="adaptable">
                <el-switch v-model="todo.adaptable"></el-switch>
            </el-form-item>
            <el-form-item label="Content" prop="content">
                <el-input type="textarea" v-model="todo.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('todo')">立即创建</el-button>
                <el-button @click="resetForm('todo')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import  {getDateString, getDateStringWithoutHour} from "../utils/date";

    export default {
        name: "All",
        mounted() {
        },
        data() {
            return {
                todo: {
                    title: '',
                    type: '',
                    endDate: '',
                    adaptable: false,
                    content: '',
                },
                rules: {
                    title: [
                        {required: true, message: 'Please input the title', trigger: 'blur'},
                    ],
                    type: [
                        {required: true, message: 'Please select type', trigger: 'change'}
                    ],
                    endDate: [
                        {type: 'date', required: true, message: 'Please Select date', trigger: 'change'}
                    ],
                    adaptable: [],
                    content: [
                        {required: true, message: 'Please input the todo content', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: 'The todo was successfully created.',
                            type: 'success'
                        });
                        console.log('todo', this.todo)
                        this.todo = {...this.todo, createDate: getDateString(new Date(Date.now())),endDate: getDateStringWithoutHour(this.todo.endDate)}
                        this.$store.commit("addTodo", this.todo);
                        this.$router.push('/');
                    } else {
                        this.$message({
                            message: 'Error.',
                            type: 'error'
                        });
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .form-title {
        margin-left: 100px;
    }
</style>

