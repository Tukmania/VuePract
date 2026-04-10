import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TodoList from '../views/TodoList.vue'


const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'TodoList',
        path: '/todos',
        component: TodoList

    },
    {
        name: 'TaskDetails',
        path: '/todos/:id',
        component: TaskDetails,
        props: true

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
