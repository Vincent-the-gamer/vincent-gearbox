<footer class="{ $theme === 1 ? "light" : "dark"}">
  <p>@Copyright 2023-Present Vincent-the-gamer(诡锋)</p>
  <p>Page not final.</p>
</footer>

<script lang="ts">
    import { theme } from "@/store/themeStore";

</script>

<style lang="scss">
    footer{
        position: relative;
        margin: 0 auto;
        left: 0;
        bottom: -5px;
        margin-top: 5px;
        transform: scale(102%, 102%);
        padding: 8px;
        width: 100%;
        height: fit-content;
        p{
            width: fit-content;
            margin: 10px auto;
        }
        &.light{
            background-color: white;
            box-shadow: 0 0 20px grey;
        }
        &.dark{
            color: white;
            background-color: rgb(44, 44, 44);
        }
    }
</style>