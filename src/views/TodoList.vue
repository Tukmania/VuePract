<script setup>
import TaskList from '../components/TaskList.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const tasks = ref([]);

onMounted(() => {
    tasks.value = JSON.parse(localStorage.getItem("tasks")) || [];
});

const router = useRouter();

const goToTask = (taskId) => {
    // Navigate to the task details page
    router.push(`/todos/${taskId}`);
};

</script>

<template>
    <div class="main">
        <h1>Your Tasks</h1>
        <TaskList :tasks="tasks" @viewTask="goToTask" />
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