<script setup>
defineProps({
    tasks: Array
});
</script>
<template>
  <div class="task-list">
    <h2>Task List</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <h3>{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <p>Date: {{ task.date }}</p>
        <ul v-if="task.subTasks && task.subTasks.length > 0">
          //add a checkbox to mark subtask as completed
          <li v-for="(subTask, subIndex) in task.subTasks" :key="subIndex">
            <label>
              <input type="checkbox" v-model="subTask.completed" />
              {{ subTask }}
            </label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-list {
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.task-list h2 {
  margin-top: 0;
}
.task-list ul {
  list-style: none;
  padding: 0;
}
.task-list li {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}
.task-list h3 {
  margin: 0 0 0.5rem;
}
.task-list p {
  margin: 0.5rem 0;
}
.task-list ul ul {
  margin-top: 0.5rem;
}
.task-list ul ul li {
  border: none;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>