<template>
  <div class="flex flex-col gap-1">
    <h3 class="mb-4 text-xs font-bold tracking-widest text-mint uppercase border-b border-grid pb-2">
      Project Experience
    </h3>

    <ul class="flex flex-col gap-4">
      <li v-for="work in allProjects" :key="work.title" class="group flex items-center justify-between">
        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-body group-hover:text-title transition-colors">
              {{ work.title }}
            </span>
          </div>
          <span class="text-xs text-sub">{{ work.category }}</span>
        </div>

        <div class="flex gap-x-2">
          <i v-if="work.device.includes('pc')" class="icon-desktop" title="PC"></i>
          <i v-if="work.device.includes('mobile')" class="icon-mobile" title="모바일"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { allProjectItem } from '@/types/portfolio';

// work summary 
const allProjects : allProjectItem[] = [
  { 
    title: '한화시스템 클레버스 확산 프로젝트', 
    category: 'Vue.js 프로젝트', 
    status: '26.01 종료', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '애큐온 캐피탈 커머셜 전자청약 구축', 
    category: '모바일웹 구축', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: '현대리바트 중고몰 (오구가구) 구축', 
    category: 'PC & 모바일웹', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '이마트 그룹웨어 사이트 구축', 
    category: 'PC & 모바일웹', 
    status: '', 
    device: ['pc' , 'mobile'] 
  },
  { 
    title: '우리은행 WON뱅킹 전담반 운영', 
    category: '금융/운영', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: 'LG전자 오픈마켓 운영', 
    category: '커머스 운영', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '네이버 라인 ACCOUNT 운영', 
    category: '글로벌 운영', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: '하나은행 외투법인 CMS 구축', 
    category: '금융 구축', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: '영풍문고 웹 & 모바일 리뉴얼', 
    category: '커머스 리뉴얼', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: 'LG인화원 웹사이트 구축', 
    category: '반응형 웹 / Bootstrap', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '부산은행 캐피탈 웹 & 모바일 리뉴얼', 
    category: '금융 리뉴얼', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '차병원그룹 사이트 유지보수 및 구축', 
    category: '의료/운영', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: '비비빅 사이트 구축 & 세종병원 유지보수', 
    category: '웹 구축', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: 'SIM 웹사이트 & 세종병원 다국어 구축', 
    category: '글로벌 웹', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: '메디포스트 셀피움 사이트 구축', 
    category: '웹 구축', 
    status: 'cafe24 기반 템플릿 사용', 
    device: ['pc'] 
  },
  { 
    title: '부천시립노인병원 사이트 구축', 
    category: '의료 웹', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: 'CU멤버십 APP 리뉴얼', 
    category: '하이브리드 앱', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: '대명 쏠비치 델피노 웹 리뉴얼', 
    category: '레저 리뉴얼', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: '리앤한 한스타일몰 구축', 
    category: '커머스 구축', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '쥬비스 다이어트앱 고도화', 
    category: '앱 고도화', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: '대명위드원 모바일 웹 구축', 
    category: '모바일 구축', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: 'Dr.G 모바일웹 리뉴얼', 
    category: '뷰티 리뉴얼', 
    status: '', 
    device: ['mobile'] 
  },
  { 
    title: '현대차정몽구재단 미디어 아카이브', 
    category: '반응형 웹 구축', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '홈플러스 이러닝 사이트 리뉴얼', 
    category: 'LMS 리뉴얼', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: '국가보훈처 성과관리시스템 구축', 
    category: '공공 구축', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: 'AK MALL 웹/모바일 홈페이지 구축', 
    category: '커머스 구축', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '크레듀 웹접근성 프로젝트', 
    category: 'WA 인증', 
    status: '', 
    device: ['pc'] 
  },
  { 
    title: '국민체육진흥공단 반응형 웹 구축', 
    category: '공공 / WA 인증 / responsive', 
    status: '', 
    device: ['pc', 'mobile'] 
  },
  { 
    title: '제천한방몰 등 25개 사이트 구축', 
    category: '웹 구축', 
    status: '초기 경력', 
    device: ['pc', 'mobile'] 
  }
]
</script>