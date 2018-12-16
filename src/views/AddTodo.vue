<template>
    <div>
        <h3 class="form-title">Creat an new todo</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="Title" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="Type" prop="type">
                <el-select v-model="ruleForm.type" placeholder="Select todo type">
                    <el-option label="type1" value="type1"></el-option>
                    <el-option label="type2" value="type2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="End date" required>
                <el-col :span="11">
                    <el-form-item prop="date">
                        <el-date-picker type="date" placeholder="Select date" v-model="ruleForm.date"
                                        style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="Adaptable" prop="adaptable">
                <el-switch v-model="ruleForm.adaptable"></el-switch>
            </el-form-item>
            <el-form-item label="Content" prop="content">
                <el-input type="textarea" v-model="ruleForm.content"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "All",
        mounted() {
        },
        data() {
            return {
                ruleForm: {
                    title: '',
                    type: '',
                    date: '',
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
                    date: [
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
                        this.$router.push('/')
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

