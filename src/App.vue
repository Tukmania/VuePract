<script setup>

import { ref, reactive, computed } from 'vue';
import TaskList from './components/TaskList.vue';
import FilterTasks from './components/FilterTasks.vue';
import ModalWindowComponent from './components/Modal/ModalWindowComponent.vue';
import addTaskModal from './components/Modal/addTaskModal.vue';
import AddTaskModal from './components/Modal/addTaskModal.vue';

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

let newTask = {completed: false};

let filterByTask = ref("");

let modalIsActive = ref(false);

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


function setFilter(value) {
  filterByTask.value = value;
}




</script>

<template>

  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          Tasks Manager
        </h1>
      </div>
      <div class="header-side">
       <button class="btn secondary" @click="modalIsActive = true">
        Add Task
       </button>
      </div>
    </div>
    
      <FilterTasks :FilterByTask="filterByTask" @setFilter="setFilter" @clearFilter="filterByTask = ''"/>
      
    

    <div class="tasks">

      <TaskList @toggleCompleted="updateTask" v-for="(task, index) in FilteredTasks" :key="index" :task="task"/>
    </div>

     <ModalWindowComponent v-if="modalIsActive" @closePopup="modalIsActive = false">
                
        <AddTaskModal/>

     </ModalWindowComponent>

  </main>
  
   

</template>


<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}



.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}

.task {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 20px;
  border-radius: 12px;
  position: relative;


  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }


  .task-check {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    right: 10px;

    label {
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 5px;
      cursor: pointer;
    }

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border: 0.77px solid #AEAEB2;
      appearance: none;
      cursor: pointer;


      &:checked {
        background-color: #0A7AFF;
        border-color: #0A7AFF;

        &::before {
          content: '';
          display: block;
          width: 4.5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
}



</style>