<!-- 主页的大招牌 -->
<div class="main-board {$theme === 1 ? "light" : "dark"}">
  <div class="title {$theme === 1 ? "light" : "dark"}">
    <h1>Vincent's Gearbox</h1>
    <h4>瞎整一些实用的小工具</h4>
  </div>
</div>

<script lang="ts">
    import { theme } from "@/store/themeStore";


</script>

<style lang="scss">
    .main-board{
        position: relative;
        width: 100%;
        height: 600px;
        left: 0;
        margin-top: 75px;
        background-size: cover;
        transition: background-image 0.5s;
        &.light{
          background-image: url("@/assets/imgs/banner-light.png");
        }
        &.dark{
          background-image: url("@/assets/imgs/banner-dark.jpg");
        }
        .title{
            min-width: 300px;
            h1{
              transform: scale(110%, 110%);
            }
            h4{
              font-size: 18px;
            }
            h1, h4{
                width: fit-content;
                margin: 0 auto;
            }
            background-color: rgba(0, 0, 0, 0.364);
            border-radius: 8px;
            position: absolute;
            top: calc(50% - 60px);
            right: 45px;
            width: fit-content;
            margin: 0 auto;
            padding: 30px;
            color: white;
        }
        
    }
</style>