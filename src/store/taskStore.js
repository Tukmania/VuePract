import { defineStore } from "pinia";
import { ref,reactive,computed } from "vue";


export const useTaskStore = defineStore("tasks", () => {
const tasks = reactive([
  
    {
      name: "Website design",
      description: "Define the style guide, branding and create the webdesign on Figma.",
      completed: true,
      id: 1
    },
    {
      name: "Website development",
      description: "Develop the portfolio website using Vue JS.",
      completed: true,
      id: 2

    },
    {
      name: "Hosting and infrastructure",
      description: "Define hosting, domain and infrastructure for the portfolio website.",
      completed: false,
      id: 3
    },
    {
      name: "Composition API",
      description: "Learn how to use the composition API and how it compares to the options API.",
      completed: false,
      id: 4

    },
    {
      name: "Pinia",
      description: "Learn how to setup a store using Pinia.", 
      completed: false,
      id: 5
    },
    {
      name: "Groceries",
      description: "Buy rice, apples and potatos.",
      completed: false,
      id: 6
    },
    {
      name: "Bank account",
      description: "Open a bank account for my freelance business.",
      completed: false,
      id: 7

    }
 
]);

let filterByTask = ref("");



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

function addTask() {
  if (newTask.name && newTask.description) {
    newTask.id = Math.max(...tasks.map(task => task.id)) + 1;
    tasks.push({...newTask});
    newTask = {completed: false};
  }
  else {
    alert("Please fill in both the title and description.");
  }
}

function updateTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
  }
}


  return { tasks, filterByTask, setFilter,FilteredTasks, addTask, updateTask };
});
