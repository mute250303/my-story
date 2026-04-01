<template>
  <div class="flex flex-col gap-8">
    <section class="bg-lightmint border-border-mint/50 rounded-lg border p-4">
      <h3
        class="mb-2 text-xs font-bold uppercase tracking-wider text-mint"
      >
        Special Activity
      </h3>
      <div class="flex flex-col gap-1">
        <strong class="text-sm text-title"
          >웹 접근성 서포터즈(웹접근성 연구소) 1기 활동</strong
        >
        <p class="text-xs leading-relaxed text-body">
          서울문화재단, 다산콜센터, 삼육보건대학교 등
          <span class="font-bold text-mint"
            >15개 주요 공공기관 및 복지관</span
          >
          사이트를 대상으로 웹 접근성 22개 지침에 따른 정밀 평가 및 분석 보고서
          제출
        </p>
      </div>
    </section>

    <section class="flex flex-col pl-4">
      <div v-for="(item, index) in activities" :key="index" class="relative pl-5 pb-4 before:content-[''] before:block before:w-0.5 before:h-full before:bg-mint before:absolute before:left-0 before:top-2 last:before:content-none">
        <div
          class="absolute -left-[7px] top-1.5 h-4 w-4 rounded-full border-2 border-mint bg-background"
        ></div>

        <span class="text-xs font-bold text-mint">{{
          item.year
        }}</span>
        <h4 class="mb-1 text-sm font-semibold text-title">{{ item.title }}</h4>
        <p class="text-xs leading-tight text-sub">{{ item.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const activities = [
  {
    year: '2023 - 2026',
    title: '[기업] Vue.js 기반 한화시스템 ICT 클레버스 확산 프로젝트 수행',
    desc: '기존 운영 프로젝트의 경우 Vue2 Vue3 혼재 (option API 와 composition API) 되어 있었으며, 새로운 프로젝트는 Vue3 + Typescript + Nuxt 환경에서 작업하였음',
  },
  {
    year: '2023',
    title: '[금융] 애큐온 캐피탈 커머셜 전자청약 모바일웹 구축',
    desc: '클립소프트 솔루션 기반의 전자청약 모바일 웹 구축',
  },
    {
    year: '2022 - 2022',
    title: '[기업] 현대리바트 중고몰 (오구가구) 사이트 pc 및 모바일 웹 구축 / 이마트 그룹웨어 사이트 구축',
    desc: '쇼핑몰 사이트 웹 및 모바일 구축 / 내부 그룹웨어 사이트 구축',
  },
  {
    year: '2021 - 2022',
    title: '[금융] 우리은행 WON뱅킹 전담반 운영',
    desc: '우리은행 WON뱅킹 전담반 운영 및 우리은행의 이행 프로세스 경험, 금융권 특유의 보안 가이드 준수',
  },
  {
    year: '2019 - 2021',
    title: '[기업] 네이버 라인 ACCOUNT 운영 / LG전자 오픈마켓 운영', 
    desc: '안정적으로 커머스 운영을 담당',
  },
  {
    year: '2013 - 2014',
    title: '[공공기관] 웹 접근성 전문 역량 강화',
    desc: '국민체육진흥공단, 크레듀 등 웹 접근성 인증마크 획득',
  },
  {
    year: '2012',
    title: 'Professional Career Start',
    desc: '웹퍼블리셔 입문 및 25개 이상 중소형 사이트 구축 수행',
  },
];
</script>
