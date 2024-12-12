import { createRouter, createWebHistory } from 'vue-router';

import AdminDashboard from '@/views/admin/AdminDashboard.vue';
import Users from '@/views/admin/Users.vue';

const routes = [
  { path: '/', name: 'dashboard', component: AdminDashboard },
  { path: '/users', name: 'users', component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
