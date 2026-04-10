<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();


const task = ref([]);

onMounted(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskId = route.params.id;
     task.value = tasks.find(t => t.id == taskId);

     if (!task.value) {
        // If task not found, navigate back to the task list
        router.push('/todos');
     }
});


</script>

<template>
    <h1>Task Details</h1>
    <p>Here you can view and edit the details of a specific task.</p>
    <div class="task-details">
        <h2>{{ task.title }}</h2>
        <p>Description: {{ task.description }}</p>
        <p>Date: {{ task.date }}</p>
        <h3>Subtasks</h3>
        <ul>
            <li v-for="subTask in task.subTasks" :key="subTask.id">
                {{ subTask.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped>  

</style>