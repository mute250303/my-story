<template>
  <component
    :is="to ? 'router-link': 'div'"
    :to="to"
    class="card-box"
    :class="[gridClass, to?'cursor-pointer':'']"
  >
  <h2 v-if="title" class="font-bold text-lg">{{ title }}
    <span v-if="subTxt" class="font-normal opacity-70 text-xs pl-2">{{ subTxt }}</span>
  </h2>
    <div class="card-content pr-2">
      <slot></slot>
    </div>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  gridClass?: string;
  to?: string;
  subTxt? :string;
}>();
</script>

<style scoped></style>
