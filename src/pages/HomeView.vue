<template>
  <section class="section-wp home">
    <div class="card-box-wp home">
      <CardBox
        v-for="(item, index) in homeCard"
        :key="index"
        :title="item.title"
        :gridClass="item.gridClass"
        :to="item.to"
      >
        <component :is="item.contentComponent" />
      </CardBox>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeCardItem } from '@/types/portfolio';
import CardBox from '@/components/common/CardBox.vue';
import ProfileSummary from '@/components/summary/ProfileSummary.vue';
import ActivitySummary from '@/components/summary/ActivitySummary.vue';
import WorkSummary from '@/components/summary/WorkSummary.vue';
import SkillSummary from '@/components/summary/SkillSummary.vue';
import ContactSummary from '@/components/summary/ContactSummary.vue';

const homeCard: HomeCardItem[] = [
  {
    title: 'ABOUT/PROFILE',
    gridClass: 'box1',
    contentComponent: ProfileSummary,
    to: '/about',
  },
  {
    title: 'ACTIVITY',
    gridClass: 'box2',
    contentComponent: ActivitySummary,
    to: '/about',
  },
  {
    title: 'WORK',
    gridClass: 'box3',
    contentComponent: WorkSummary,
    to: '/work',
  },
  {
    title: 'SKILLS',
    gridClass: 'box4',
    contentComponent: SkillSummary,
    to: '/skills',
  },
  {
    title: 'CONTACT',
    gridClass: 'box5',
    contentComponent: ContactSummary,
    to: '/skills',
  },
];
</script>

<style scoped></style>
