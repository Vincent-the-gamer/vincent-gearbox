<!-- 主页的大招牌 -->
<div class="main-board">
  <div class="title {$theme === 1 ? "light" : "dark"}">
    <h1>Vincent's Gearbox</h1>
    <h4>瞎整一些实用的小工具，包含编程类和非编程类的</h4>
  </div>
</div>

<script lang="ts">
    import { theme } from "@/store/themeStore";


</script>

<style lang="scss">
    .main-board{
        position: relative;
        border: 1px solid rgb(0, 145, 255);
        width: 100%;
        height: 400px;
        top: 70px;
        .title.light{
            position: absolute;
            top: calc(50% - 60px);
            right: 45px;
            width: fit-content;
            margin: 0 auto;
            padding: 30px;
            h1{
              transform: scale(110%, 110%);
            }
            h1, h4{
                width: fit-content;
                margin: 0 auto;
            }
        }
        .title.dark{
            color: white;
            position: absolute;
            top: calc(50% - 60px);
            right: 45px;
            width: fit-content;
            margin: 0 auto;
            padding: 30px;
            h1{
              transform: scale(110%, 110%);
            }
            h1, h4{
                width: fit-content;
                margin: 0 auto;
            }
        }
    }
</style>