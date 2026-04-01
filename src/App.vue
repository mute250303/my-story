<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';
</script>

<template>
  <div class="app-wrapper">
    <div class="container-wp">
      <TheHeader />
      <div class="scroll-wp">
        <main class="content-wp">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
