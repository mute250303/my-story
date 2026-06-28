<template>
  <div class="section-wp about">
    <div class="card-box-wp about">
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
import type { AboutItem } from '@/types/portfolio';
import CardBox from '@/components/common/CardBox.vue';
import Profile from '@/components/summary/ProfileSummary.vue';
import Activity from '@/components/summary/ActivitySummary.vue';

const aboutList :AboutItem[] = [
  {
    gridClass: 'box-top',
    contentComponent: Profile,
  },
  {
    title: 'PROFESSIONAL HISTORY',
    gridClass: 'box-bottom',
    contentComponent: Activity,
  },
];
</script>


