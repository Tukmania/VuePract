<script setup>
const props = defineProps(['FilterByTask']);
</script>

<template>
     <div class="filters">
  <div>
        <p>Filter by state</p>
        <div class="badges">
          <div class="badge" :class="{ 'selected': props.FilterByTask === 'todo' }" @click="$emit('setFilter', 'todo')">
            To-Do
          </div>
          <div class="badge" :class="{ 'selected': props.FilterByTask === 'done' }" @click="$emit('setFilter', 'done')">
            Done
          </div>
          <span v-if="FilterByTask" class="clear" @click="$emit('clearFilter')">
            x clear
          </span>
        </div>
      </div>
     </div>
      </template>

    <style lang="scss" scoped>
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
  .selected {
    background-color: red;
    color: var(--white-color);
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
    </style>