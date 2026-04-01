<template>
  <div class="flex flex-col gap-3 pb-1">
    <div v-for="item in contacts" :key="item.label" class="flex items-center gap-3 pl-1">
      <div class="w-8 h-8 flex items-center justify-center rounded-full 
                  text-mint shadow-md">
        <Icon :icon="item.icon" class="w-5 h-5" />
      </div>
      
      <a :href="item.link" class="text-body hover:text-mint transition-colors font-medium">
        {{ item.value }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
const contacts = [
  { 
    label: 'Email', 
    value: 'proven2@naver.com', 
    icon: 'lucide:mail',
    link: 'mailto:proven2@naver.com',
  },
  { 
    label: 'Phone', 
    value: '010-7941-4398', 
    icon: 'lucide:phone',
    link: 'tel:01079414398',
  }
];
</script>