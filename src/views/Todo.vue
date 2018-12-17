<template>
    <div>
        <ul class="todo-info">
            <div>
                <span class="title">ID:</span><span class="value">{{todo.id}}</span>
            </div>
            <li>
                <span class="title">Title:</span><span class="value">{{todo.title}}</span>
            </li>
            <li>
                <span class="title">Type:</span><span class="value">{{todo.type}}</span>
            </li>
            <li>
                <span class="title">End date:</span><span class="value">{{todo.endDate}}</span>
            </li>
            <li>
                <span class="title">Adaptable:</span><span class="value">{{todo.adaptable}}</span>
            </li>
            <li>
                <span class="title">Content:</span><span class="value">{{todo.content}}</span>
            </li>
            <li>
                <span class="title">Done:</span><span class="value">{{todo.done}}</span>
            </li>
            <li>
                <span class="title">Create date:</span><span class="value">{{todo.createDate}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data() {
            return {
            }
        },
        computed: {
            todo() {
                let id = this.$route.params.id;
                return this.$store.getters.getTodoById(parseInt(id))
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .todo-info {
        list-style: none;
    }

    .title {
        font-weight: 500;
        font-size: 30px;
        min-width: 50px;
        text-align: right;
    }

    .value {
        font-size: 30px;
    }
</style>

