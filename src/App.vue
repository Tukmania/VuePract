<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import TaskForm from './components/TaskForm.vue'
import { onMounted } from 'vue';
import TaskList from './components/TaskList.vue';
import { ref } from 'vue';


//data properties
const tasks = ref([]);

//load tasks from local storage when the component is mounted
onMounted(() => {
   tasks.value = JSON.parse(localStorage.getItem("tasks")) || [];

 
});

  const handleAddTask = (newTask) => {
    //add new task to tasks array
    tasks.value.push(newTask);

     //save to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

 

</script>

<template>
  <Header />

  <main class="main-content">
    
      <h1>Add a task</h1>
      <div class="content">
        <TaskForm @taskAdded="handleAddTask" />
        <TaskList :tasks="tasks" />
      </div>
   
  </main>

  <Footer />
</template>

<style>
.main-content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
.content {
  margin-top: 2rem;
}
.content h1 {
  margin-bottom: 1rem;
}
.taks {
  list-style: none;
  padding: 0;
}
.task {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}
.task h3 {
  margin: 0 0 0.5rem;
}
.task p {
  margin: 0.5rem 0;
}
</style>
