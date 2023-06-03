<!-- 用来装小盒子的大盒子 -->
<div class="container">
    <div class="item-list {$theme === 1 ? "light" : "dark"}">
        {#each itemList as item}
            <div class="item">
                <div class="content">
                    {#if item.link !== ""}
                        <a href="{ item.link }" target="_blank">
                            <h1>{ item.title }</h1>
                            <img src={ item.pic } alt="logo"/>
                            <p>{ item.description }</p>
                        </a>
                        {:else}
                        <h1>{ item.title }</h1>
                        <img src={ item.pic } alt="logo"/>
                        <p>{ item.description }</p>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>

<script lang="ts">
    import { theme } from "@/store/themeStore";
    import itemList from "@/utils/itemList"

</script>

<style lang="scss">
    a{
        text-decoration: none;
    }
    .container{
        width: 100%;
        position: relative;
        height: fit-content;
        padding-bottom: 80px;
        margin-top: 20px;
        .item-list{
            position: relative;
            border-radius: 7px;
            width: 95%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            .item{
                width: 300px;
                height: 300px;
                padding: 5px;
                margin: 5px;
                border: 2px;
                border-radius: 7px;
                transition: all 0.5s;
                .content{
                    margin: 0 auto;
                    h1{
                        width: fit-content;
                        margin: 8px auto;
                        text-align: center;
                    }
                    p{
                        width: fit-content;
                        margin: 5px auto;
                        text-align: center;
                    }
                    img{
                        display: block;
                        margin: 7px auto;
                        position: relative;
                        width: 40%;
                    }
                }
                &:hover{
                    transform: scale(102%, 102%);
                    cursor: pointer;
                }
            }
            &.light{
                background-color: rgb(240, 240, 240);
                box-shadow: 0 0 15px black;
                color: black;
                .item{
                    background-color: rgb(200, 200, 200); 
                    &:hover{
                        box-shadow: 0 0 15px black;
                    }
                }
                & a{
                  color: black;
                }
            }

            &.dark{
                background-color: rgb(43, 43, 43);
                box-shadow: 0 0 15px rgb(113, 112, 112);
                .item{
                    color: white;
                    background-color: rgb(82, 82, 82); 
                    &:hover{
                        box-shadow: 0 0 15px rgb(255, 0, 174);
                    }
                }
                & a{
                  color: white;
                }
            }
        }
    }
   
</style>