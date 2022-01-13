import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Detail from '../views/Details.vue'
const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/details/:id", name: "Details", component: Detail}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router