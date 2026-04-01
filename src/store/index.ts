import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {

  const getInitialTheme = ():boolean => {
    if(typeof window !== 'undefined'){
      return localStorage.getItem('theme') === 'dark'
    }
    return false

  }


  const isDark = ref<boolean>(getInitialTheme())

  const toggleTheme = ():void => {
    isDark.value = !isDark.value
    const mode:'dark'|'light' = isDark.value ? 'dark' : 'light'
    
    if(typeof window !== 'undefined'){
       document.documentElement.className = mode
      localStorage.setItem('theme', mode)
    }
  }

  return { isDark, toggleTheme }
})