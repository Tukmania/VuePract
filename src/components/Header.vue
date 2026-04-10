<script setup>
</script>
<template>
  <header class="header">
    <h1>My Todo List</h1>
    <ul>
      <li>My tasks</li>
      <li>About</li>
    </ul>

  </header>
</template>
<style scoped>      
.header {
  background-color: #42b983;
  color: white;
  padding: 1rem;
  text-align: center;
}
.header h1 {
  margin: 0;
}
.header ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
  display: flex;
  justify-content: center;
}
.header ul li {
  margin: 0 1rem;
  cursor: pointer;
}
.header ul li:hover {
  text-decoration: underline;
}

</style>