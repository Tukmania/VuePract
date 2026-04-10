<script setup>
import { ref, onMounted } from 'vue';
import TaskForm from '../components/TaskForm.vue';

const tasks = ref([]);

//load tasks from local storage when the component is mounted
onMounted(() => {

    tasks.value = JSON.parse(localStorage.getItem("tasks")) || [];
}
);

const handleAddedTask = (newTask) => {
    //add new task to tasks array
    tasks.value.push(newTask);

    //save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
}


</script>

<template>
    <h1>Welcome to the Home Page of my simple Todo App</h1>
    <div class="main">
        <p>Here you can manage your tasks and stay organized.
            Use the navigation menu to access different features of the app, such as adding new tasks, viewing your task
            list, and marking tasks as completed.
            Enjoy staying productive!</p>
        <TaskForm @task-added="handleAddedTask" />
    </div>
</template>

<style scoped></style>