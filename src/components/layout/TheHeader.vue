<template>
  <div class="header-wp">
    <header class="header">
      <h1 class="logo">My <span>Story</span></h1>
      <nav class="nav">
        <ul class="nav-list">
          <li>
            <RouterLink to="/" class="gnb-link" active-class="active"
              >HOME</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about" class="gnb-link" active-class="active"
              >ABOUT</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/work" class="gnb-link" active-class="active"
              >WORK</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/skills" class="gnb-link" active-class="active"
              >SKILLS</RouterLink
            >
          </li>
        </ul>
      </nav>
      <div class="theme-toggle-wp">
        <button
          class="theme-toggle group"
          :class="{ active: themeStore.isDark }"
          @click="themeStore.toggleTheme"
        >
          <span class="theme-toggle-circle">
            <Icon
              :icon="themeStore.isDark ? 'lucide:moon' : 'lucide:sun'"
              class="h-[30px] w-[30px] p-1 transition-all duration-500"
              :class="themeStore.isDark ? 'text-yellow-400' : 'text-orange-500'"
            />
          </span>
          <span class="theme-toggle-txt">{{
            themeStore.isDark === true ? 'DARK MODE' : 'LIGHT MODE'
          }}</span>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useThemeStore } from '@/store';
const themeStore = useThemeStore();
</script>
