import { writable } from "svelte/store";

/**
 * 切换主题store， 1表示白天主题， 2表示黑夜主题
 */
export const theme = createTheme(1)

function createTheme(initTheme){
   // 可写状态
   const { subscribe, set, update } = writable(initTheme)

   return {
      subscribe,  // 一定要return，这样才能自动订阅响应式
      setTheme(newVal: number){
         set(newVal)
      }
   }
}

