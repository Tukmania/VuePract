<script setup>

import { ref, reactive, computed } from 'vue';
import TaskList from './components/TaskList.vue';
import FilterTasks from './components/FilterTasks.vue';
import ModalWindowComponent from './components/Modal/ModalWindowComponent.vue';
import addTaskModal from './components/Modal/addTaskModal.vue';
import AddTaskModal from './components/Modal/addTaskModal.vue';
import { useTaskStore } from './store/taskStore';

const store = useTaskStore();

let newTask = {completed: false};



let modalIsActive = ref(false);











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
    
      <FilterTasks/>
      
    

    <div class="tasks">

      <TaskList v-for="(task, index) in store.FilteredTasks" :key="index" :task="task"/>
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