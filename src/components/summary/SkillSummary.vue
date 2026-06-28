<template>
  <div
    class="grid grid-cols-4 justify-items-center gap-x-2 gap-y-6 md:grid-cols-5 lg:grid-cols-6"
  >
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="group flex w-[50px] flex-col items-center gap-1 text-center"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
      >
        <Icon
          :icon="skill.icon"
          class="h-full w-full object-contain"
          :class="skill.color || 'text-body'"
        />
      </div>

      <span class="break-keep text-xs font-medium leading-tight text-body">
        {{ skill.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import type { Skills } from '@/types/portfolio';

const skills = ref<Skills[]>([
  { name: 'Vue.js', icon: 'vscode-icons:file-type-vue' },
  { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
  { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
  { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
  { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
  { name: 'Jquery', icon: 'mdi:jquery' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'git', icon: 'logos:git' },
  { name: 'XD', icon: 'skill-icons:xd' },
  { name: 'Photoshop', icon: 'vscode-icons:file-type-photoshop'},
  { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
  { name: 'Web Standards', icon: 'lucide:shield-check', color: 'text-mint' },
  { name: 'Web Accessibility',icon: 'mdi:accessibility', color: 'text-mint',},
  { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
]);
</script>
