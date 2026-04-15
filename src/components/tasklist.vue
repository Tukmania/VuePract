<script setup>

const props = defineProps(['task']);
import { useTaskStore } from '../store/taskStore';

const store = useTaskStore();

</script>

<template>
<div class="task">
        <h3>
          {{ task.name }} {{ task.id }}
        </h3>
        <p>
          {{ task.description }}
        </p>
        <div class="task-check">
          <input @click="store.updateTask(task.id)" type="checkbox" :checked="task.completed"/>
          <label>
           {{ task.completed ? 'Done' : 'To-Do' }}
         
          </label>
        </div>
      </div>
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

.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
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

.task {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 20px;
  border-radius: 12px;
  position: relative;
}


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
  }

    label {
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 5px;
      cursor: pointer;
    }

</style>