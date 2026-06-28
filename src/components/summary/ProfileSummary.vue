<template>
  <div class="flex flex-col gap-6 max-md:gap-3"> <div class="flex items-start gap-6 max-md:flex-col">
      <div class="w-1/4 max-md:w-full flex justify-center shrink-0">
        <div class="w-24 h-32 border-2 border-grid shadow-md rounded-lg overflow-hidden bg-white">
          <img
            src="@/assets/images/profile.jpg"
            alt="김미영 프로필"
            class="h-full w-full object-contain"
          />
        </div>
      </div>

      <div class="w-3/4 max-md:w-full flex flex-col gap-3">
        <div class="text-sm leading-relaxed">
          <p class="text-base font-bold text-title mb-1">안녕하세요, 웹 퍼블리셔 김미영입니다.</p>
          <p>
            <strong class="text-mint">Vue3 + TypeScript + Tailwind CSS</strong>를 활용해 제작한 저의 포트폴리오 사이트입니다.
            본 사이트는 <strong>반응형</strong> 웹으로 구현되었으며, Nuxt 환경 대신 직접 <strong>Vue Router</strong>를 설계하여 페이지 간 흐름을 제어했습니다.
          </p>
        </div>
        
        <ul class="flex flex-col gap-2 border-t border-grid pt-3">
          <li v-for="item in pageInfoList" :key="item.name" class="flex gap-2 text-[13px]">
            <span class="font-bold text-mint shrink-0 w-14">{{ item.name }}</span>
            <div class="text-body">
              {{ item.desc }}
              <p v-if="item.sub" class="text-xs text-red-600 dark:text-red-300 mt-1 leading-tight">
                {{ item.sub }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col gap-3 pt-4 border-t border-dashed border-grid">
      <div class="flex gap-6 max-md:gap-3">
        <div class="w-1/4 text-center max-md:text-left font-bold text-sub text-sm break-words">Certification</div>
        <div class="w-3/4 text-sm text-body leading-relaxed">
          <p>정보처산업기사</p>
          <p>웹 접근성 서포터즈 교육 수료 및 활동</p>
          <p>독서지도사</p>
        </div>
      </div>
      
      <div class="flex gap-6 max-md:gap-3" >
        <div class="w-1/4 text-center max-md:text-left font-bold text-sub text-sm break-words">Interested in</div>
        <div class="w-3/4 text-sm text-body leading-relaxed">
          <p>React, Vue, Tailwind CSS, TypeScript</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PageInfo } from '@/types/portfolio';

const pageInfoList:PageInfo[] = [
  {
    name : 'Home',
    desc : ' 메인 화면으로 전체 페이지를 각 섹션으로 나누어 grid를 사용하여 작업하였습니다. 각 페이지의 내용을 한 곳에서 볼 수 있게 모아둔 index 페이지입니다. 각 섹션을 누르면 해당 페이지로 이동합니다. '
  },
  {
    name : 'About',
    desc: '저에 대한 간단한 소개와 웹접근성 관련하여 제가 했던 일을 소개하고 있습니다. '
  },
  {
    name: 'Work',
    desc : '제가 작업한 프로젝트 및 경력을 기술한 페이지 입니다.',
    sub : ' (최근 경력은 보안 문제로 웹사이트 사진을 올릴 수 없습니다. 이 점 양해부탁드립니다.)'
  },
  {
    name: 'Skills',
    desc: '프로젝트에서 사용했던 기술을 나열하였습니다.'
  },
   {
    name: 'Contact',
    desc: '페이지에선 저의 연락처가 있으며 메일을 보낼 수 있는 페이지 입니다.'
  }
]

</script>