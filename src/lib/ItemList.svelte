<!-- 用来装小盒子的大盒子 -->
<div class="container">
    <div class="item-list {$theme === 1 ? "light" : "dark"}">
        <div class="item">
            <div class="content">
                <h1>阿巴阿巴</h1>
                <img src={testImg} alt="测试"/>
                <p>阿巴阿巴阿巴阿巴阿巴</p>
            </div>
        </div>
        <div class="item">
            <div class="content">
                <h1>阿巴阿巴</h1>
                <img src={testImg} alt="测试"/>
                <p>阿巴阿巴阿巴阿巴阿巴</p>
            </div>
        </div>
    </div>
</div>

<script lang="ts">
    import { theme } from "@/store/themeStore";
    import testImg from "@/assets/imgs/test.png"
</script>

<style lang="scss">
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
            }
        }
    }
   
</style>