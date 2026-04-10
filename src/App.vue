<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/todos">Tasks</router-link>
  </div>
  <router-view />
  <Footer />
</template>

<style>
.main-content {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
.content {
  margin-top: 2rem;
}
.content h1 {
  margin-bottom: 1rem;
}
.taks {
  list-style: none;
  padding: 0;
}
.task {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}
.task h3 {
  margin: 0 0 0.5rem;
}
.task p {
  margin: 0.5rem 0;
}
.nav {
  background-color: #333;
  padding: 1rem;
}
.nav a {
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
}
.nav a:hover {
  text-decoration: underline;
} 
</style>
