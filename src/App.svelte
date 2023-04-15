<Header/>
<!-- 注册路由 -->
<Router {routes}/>


<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "@/lib/Header.svelte";
  import routes from "@/routes";
  import { theme } from "@/store/themeStore"
  import { onMount } from "svelte";

  onMount(() => {
    // 初始化背景颜色
    document.body.style.backgroundColor = $theme === 1 ? "white" : "black"
  })

  // 计算属性, 动态改变body背景颜色
  $: document.body.style.backgroundColor = $theme === 1 ? "white" : "black"

</script>

<style lang="scss">

</style>