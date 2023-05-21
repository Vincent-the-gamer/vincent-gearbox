<!-- 用来装小盒子的大盒子 -->
<div class="container">
    <div class="item-list {$theme === 1 ? "light" : "dark"}">
        <div class="item">
            <div class="content">
                <a href="https://vincent-the-gamer.github.io/Picdiet" target="_blank">
                    <h1>PicDiet 在线图片压缩</h1>
                    <img src={ picDietImg } alt="logo"/>
                    <p>不需要后端，在前端使用JavaScript算法进行图片压缩的工具</p>
                </a>
            </div>
        </div>
        <div class="item">
            <div class="content">
                <a href="https://github.com/Vincent-the-gamer/audio-tools" target="_blank">
                    <h1>.ncm音频转.mp3音频</h1>
                    <img src={ ncm2mp3Img } alt="logo"/>
                    <p>目前，网易云音乐下载的音乐都是.ncm格式，咱想转一下</p>
                    <p>该工具需要手动拉取代码运行</p>
                </a>
            </div>
        </div>
        <div class="item">
            <div class="content">
                <h1>更多工具待续..</h1>
                <img src={testImg} alt="测试"/>
                <p>慢慢摸吧</p>
            </div>
        </div>
    </div>
</div>

<script lang="ts">
    import { theme } from "@/store/themeStore";
    import testImg from "@/assets/imgs/test.png"
    import picDietImg from "@/assets/imgs/picdiet.png"
    import ncm2mp3Img from "@/assets/imgs/ncm2mp3.jpg"
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