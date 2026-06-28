import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' ? true : false;
    }
    return false;
  };

  const isDark = ref<boolean>(getInitialTheme());

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    const mode: 'dark' | 'light' = isDark.value ? 'dark' : 'light';

    if (typeof window !== 'undefined') {
      document.documentElement.className = mode;
      localStorage.setItem('theme', mode);
    }
  };

  return { isDark, toggleTheme };
});
