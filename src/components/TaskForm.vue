<script setup>
import { ref } from "vue";

//define emits

const emit = defineEmits(["taskAdded"]);

//data properties
const taskTitle = ref("");
const taskDescription = ref("");
const taskDate = ref("");
const subTasks = ref([]);

//watchers

//methods
//whenever the user clicks the "Add Sub Task" button, this method will be called to add a new input field for a subtask appears below the previous subtask and the user can enter another subtask to be a dded to the arrray
const addSubtask = () => {
  //add new input field for subtask
  subTasks.value.push("");
};

const addTodo = () => {
  const newTask = {
    id: Date.now().toString(),
    title: taskTitle.value,
    description: taskDescription.value,
    date: taskDate.value,
    subTasks: subTasks.value,
  };

  emit("taskAdded", newTask);

  
  //reset form fields
  taskTitle.value = "";
  taskDescription.value = "";
  taskDate.value = "";
  subTasks.value = [];
};
</script>
<template>
  <form class="task-form" @submit.prevent="addTodo">
    <h2>Add a new task</h2>
    <div class="form-group">
      <label for="Date">Date:</label>
      <input type="date" id="date" v-model="taskDate" />
    </div>
    <div class="form-group">
      <label for="task-title">Task Title:</label>
      <input
        type="text"
        id="task-title"
        placeholder="Enter task title"
        v-model="taskTitle"
      />
    </div>
    <div class="form-group">
      <label for="task-description">Description:</label>
      <textarea
        id="task-description"
        placeholder="Enter task description"
        v-model="taskDescription"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="Sub-tasks">Sub Tasks:</label>
      <button type="button" @click="addSubtask">Add Sub Task</button>
      <div v-for="(subtask, index) in subTasks" :key="index">
        <input
          type="text"
          :id="'subtask-' + index"
          v-model="subTasks[index]"
          placeholder="Enter sub task"
        />
      </div>
    </div>
    <button type="submit">Add Task</button>
  </form>
</template>
<style scoped>
.task-form {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.task-form h2 {
  margin-top: 0;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #369870;
}
</style>
