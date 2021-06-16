import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Todo from './components/Todo.vue'
import User from './components/User.vue'
import Auth from './components/Auth.vue'

const routes = [
    { path: '/todo', component: Todo },
    { path: '/user', component: User },
    { path: '/', component: Auth },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
