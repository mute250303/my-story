// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import HomeView from '@/pages/HomeView.vue'; // 미리 pages 폴더에 파일을 만들어두세요!

const routes: Array<RouteRecordRaw> = [
  {
    path: '/index.html',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // Lazy Loading으로  이 페이지를 방문할 때만 불러와서 성능을 높입니다.
    component: () => import('@/pages/AboutView.vue'),
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/pages/WorkView.vue'),
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/pages/SkillsView.vue'),
  },
  //  {
  //   path: '/contact',
  //   name: 'contact',
  //   component: () => import('@/pages/ContactView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
