import { defineStore } from "pinia";
import { ref,reactive,computed } from "vue";


export const useTaskStore = defineStore("tasks", () => {

const tasks = reactive(JSON.parse(localStorage.getItem('tasks')) || []);

let filterByTask = ref("");

let modalIsActive = ref(false);

function setFilter(value) {
  filterByTask.value = value;
}

const FilteredTasks = computed(() => {
  if (filterByTask.value === 'todo') {
    return tasks.filter(task => !task.completed);
  }
  else if (filterByTask.value === 'done') {
    return tasks.filter(task => task.completed);
  }
  else {
    return tasks;
  }
});

function addTask(newTask) {
  if (newTask.name && newTask.description) {
    newTask.id = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    tasks.push({...newTask});
        }
  else {
    alert("Please fill in both the title and description.");
  }
  //After adding the task, we reset the newTask object to clear the form fields
  newTask.name = "";
  newTask.description = "";
 closePopup();
}

function updateTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    //update the individual task status in the tasks array
    task.completed = !task.completed;
  }
}

function closePopup(){
  modalIsActive.value = false;
}

function openPopup(){
  modalIsActive.value = true;
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}


  return { tasks, filterByTask, setFilter,FilteredTasks, addTask, updateTask, modalIsActive, closePopup, openPopup, deleteTask };
});
