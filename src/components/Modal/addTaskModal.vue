<script setup>
import { useTaskStore } from '../../store/taskStore';
const store = useTaskStore();

let newTask = {completed: false};



</script>

<template>
      <div class="form">
      <h3>Add a new task</h3>
      <label for="title">Title</label><br />
      <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..."><br />
      <label for="description">Description</label><br />

      <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." /><br />
      <button class="btn gray" @click="store.addTask(newTask)">Add Task</button>

    </div>
</template>

<style lang="scss">
</style>