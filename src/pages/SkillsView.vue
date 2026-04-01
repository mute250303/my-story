<template>
  <div class="section-wp skills">
    <div class="card-box-wp skills">
      <CardBox
        v-for="(item, index) in aboutList"
        :key="index"
        :title="item.title"
        :gridClass="item.gridClass"
        :subTxt="item.subTxt"
      >
        <component :is="item.contentComponent" />
      </CardBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardBox from '@/components/common/CardBox.vue';
import SkillsDetail from '@/components/SkillsDetail.vue';
import ContactSummary from '@/components/summary/ContactSummary.vue';

const aboutList = [
  {
    title: 'SKILLS DETAIL',
    gridClass: 'skills detail',
    contentComponent: SkillsDetail,
    subTxt:'아이콘을 클릭하면 상세 업무 경험을 확인하실 수 있습니다.'
  },
  {
    title: 'CONTACT',
    gridClass: 'contact',
    contentComponent: ContactSummary,
  },
];
</script>