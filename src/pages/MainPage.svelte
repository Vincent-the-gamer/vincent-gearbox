<main>
    <MainBoard/>
    <div class="{$theme === 1 ? "light" : "dark"}">
        <h1>主要工具</h1>
        <br/>
        <h3>|</h3>
        <h3>|</h3>
        <h3>|</h3>
        <h3>↓</h3>
        <br/>
    </div>
    <ItemList/>
</main>
<Footer/>


<script lang="ts">
    import Footer from "@/lib/Footer.svelte";
    import ItemList from "@/lib/ItemList.svelte";
    import MainBoard from "@/lib/MainBoard.svelte";
    import { theme } from "@/store/themeStore";

</script>

<style lang="scss">
    h1{
        position: relative;
        margin: 0 auto;
        width: fit-content;
        margin-top: 70px;
        
    }
    h3{
        position: relative;
        margin: 0 auto;
        width: fit-content;
    }
    .light{
        color: black;
    }
    .dark{
        color: white;
    }
</style>
