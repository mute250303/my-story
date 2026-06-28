import type { Component } from 'vue';

export interface HomeCardItem {
  title: string;
  gridClass: string;
  contentComponent: Component;
  to: string;
}

export interface AboutItem {
  gridClass: string;
  contentComponent: Component;
  title?: string;
}

export interface WorkListItem {
  title: string;
  gridClass: string;
  contentComponent: Component;
}

export interface SkillListItem {
  title: string;
  gridClass: string;
  contentComponent: Component;
  subTxt?: string;
}
export interface ActivityItem {
  year: string;
  title: string;
  desc: string;
}
export interface ContactItems {
  label: string; 
  value:  string; 
  icon:  string; 
  link:  string; 
  target?: '_blank' | '_self'; 
}
export interface PageInfo {
  name: string;
  desc: string;
  sub?: string; 
}
export interface Skills {
  name: string;
  icon: string;
  color?: string;
}
export interface allProjectItem  {
  title: string;
  category: string;
  status?: string;
  device: ('pc' | 'mobile')[];
}
export interface SkillsDetail {
  id: number;
  name: string;
  icon: string;
  status?: string;
  desc: string;
  color?: string;
}

export interface CardBoxProps {
  title?: string;
  gridClass?: string;
  to?: string;
  subTxt? :string;
}