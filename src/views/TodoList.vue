<script setup>
import TaskList from '../components/TaskList.vue';
import { ref, onMounted } from 'vue';

const tasks = ref([]);

onMounted(() => {
    tasks.value = JSON.parse(localStorage.getItem("tasks")) || [];
});

</script>

<template>
    <div class="main">
        <h1>Your Tasks</h1>
        <TaskList :tasks="tasks" />
    </div>

</template>

<style scoped>
.main {
    margin-top: 20px;
}
h1 {
    color: #333;
}
</style>