<template>
  <component
    :is="to ? 'router-link' : 'div'"
    :to="to"
    class="card-box"
    :class="[gridClass, to ? 'cursor-pointer' : '']"
  >
    <h2 v-if="title" class="text-lg font-bold">
      {{ title }}
      <span v-if="subTxt" class="pl-2 text-xs font-normal opacity-70">{{
        subTxt
      }}</span>
    </h2>
    <div class="card-content pr-2">
      <slot></slot>
    </div>
  </component>
</template>

<script setup lang="ts">
import type { CardBoxProps } from '@/types/portfolio';

const props = defineProps<CardBoxProps>();
</script>

