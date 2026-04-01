<template>
  <div class="section-wp work">
    <div class="card-box-wp work">
      <CardBox
        v-for="(item, index) in aboutList"
        :key="index"
        :title="item.title"
        :gridClass="item.gridClass"
      >
        <component :is="item.contentComponent" />
      </CardBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardBox from '@/components/common/CardBox.vue';
import Work from '@/components/summary/WorkSummary.vue';

const aboutList = [
  {
    title: 'PROJECTS (PC & MOBILE)',
    gridClass: 'work',
    contentComponent: Work,
  },
];
</script>