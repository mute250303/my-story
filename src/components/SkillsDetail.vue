<template>
  <div
    class="grid grid-cols-4 justify-items-center gap-x-2 gap-y-6 md:grid-cols-5 lg:grid-cols-6"
  >
    <div
      v-for="skill in skills"
      :key="skill.id"
      @click="selectedId = skill.id"
      class="group flex w-[60px] cursor-pointer flex-col items-center gap-1 text-center"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-lg"
        :class="{ 'border border-mint': selectedId === skill.id }"
      >
        <Icon :icon="skill.icon" class="h-8 w-8 object-contain" />
      </div>
      <span
        :class="{ 'font-medium text-mint': selectedId === skill.id }"
        class="break-keep text-xs leading-tight text-body"
      >
        {{ skill.name }}
      </span>
    </div>
  </div>

  <div class="relative mt-5 rounded-2xl bg-lightmint p-6">
    <div class="flex flex-col gap-1" v-if="currentSkill">
      <h4 class="flex items-center gap-2 text-base font-bold text-title">
        {{ currentSkill.name }}
        <span
          v-if="currentSkill.status"
          class="bg-mint/10 rounded-full px-2 py-0.5 text-xs font-normal text-mint"
          >{{ currentSkill.status }}</span
        >
      </h4>
      <p class="break-keep text-sm leading-relaxed text-body">
        {{ currentSkill.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import type { SkillsDetail } from '@/types/portfolio';

const selectedId = ref<number>(1);

const currentSkill = computed(
  () => skills.value.find((s) => s.id === selectedId.value) || skills.value[0]
);

const skills = ref<SkillsDetail[]>([
  {
    id: 1,
    name: 'Vue.js',
    icon: 'vscode-icons:file-type-vue',
    desc: 'vue 환경에서 프로젝트를 수행 - 한화시스템 클레버스 확산 프로젝트',
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'vscode-icons:file-type-js-official',
    desc: 'vue 환경에서 javascript 활용하여 프로젝트를 수행 - 한화시스템 클레버스 확산 프로젝트',
  },
  {
    id: 3,
    name: 'TypeScript',
    icon: 'vscode-icons:file-type-typescript-official',
    desc: 'Vite + TS 환경에서 프로젝트 수행 - 한화시스템 클레버스 확산 프로젝트',
  },
  {
    id: 4,
    name: 'HTML5',
    icon: 'vscode-icons:file-type-html',
    desc: '다양한 브라우저 환경에서도 동일한 사용자 경험을 제공하는 크로스 브라우징 마크업',
  },
  {
    id: 5,
    name: 'CSS3',
    icon: 'vscode-icons:file-type-css',
    desc: 'Flex와 Grid 레이아웃을  활용한 반응형 웹 구현 및 미디어 쿼리 최적화',
  },
  {
    id: 6,
    name: 'Jquery',
    icon: 'mdi:jquery',
    desc: '기존의 소스를 안정적으로 운영하고 커스텀 하여 사용 ',
  },
  {
    id: 7,
    name: 'Figma',
    icon: 'logos:figma',
    desc: '디자인 가이드를 분석하여 컴포넌트 단위의 마크업 구조 설계 및 협업을 위해 사용',
  },
  {
    id: 8,
    name: 'git',
    icon: 'logos:git',
    desc: '형상관리 및 협업을 위한 도구로 사용',
  },
  {
    id: 9,
    name: 'XD',
    icon: 'skill-icons:xd',
    desc: 'UI/UX 디자인 의도를 파악하여 레이아웃 구현을 위해 사용',
  },
  {
    id: 10,
    name: 'Photoshop',
    icon: 'vscode-icons:file-type-photoshop',
    desc: 'UI/UX 디자인 의도를 파악하여 레이아웃 구현을 위해 사용',
  },
  {
    id: 11,
    name: 'Tailwind CSS',
    icon: 'vscode-icons:file-type-tailwind',
    status: 'Learning',
    desc: 'Vite + TS 환경의 포트폴리오 제작에 적용하여 유틸리티 우선 방식의 효율적인 스타일링 경험',
  },
  {
    id: 12,
    name: 'Web Standards',
    icon: 'lucide:shield-check',
    color: 'text-mint',
    desc: 'W3C 명세를 준수하여 표준 마크업으로 프로젝트 수행',
  },
  {
    id: 13,
    name: 'Web Accessibility',
    icon: 'mdi:accessibility',
    color: 'text-mint',
    desc: '장애인/고령자 등 정보 취약계층을 고려한 차별 없는 서비스 구현을 위해 노력',
  },
  {
    id: 14,
    name: 'React',
    icon: 'vscode-icons:file-type-reactjs',
    status: 'Learning',
    desc: '미니 쇼핑몰 프로젝트를 진행하면서 공부중',
  },
]);
</script>
