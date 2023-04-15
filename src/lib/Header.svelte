<header class={ $theme === 1 ? "light" : "dark" }>
    <div class="left">
        <img src={ Logo } alt="logo"/>
        <h3>Vincent's Gearbox</h3>
    </div>
    <div class="right">
        <ul>
            <li>工具分类</li>
            <li>
                <input type="checkbox" 
                       value={ $theme === 1 }
                       on:change={ switchTheme }/>
            </li>
            <li>
                <img src={ GitHubLogo } alt="github"/>
                <a href="https://github.com/Vincent-the-gamer"
                   target="_blank">GitHub</a>
            </li>
        </ul>
    </div>
</header>


<script lang="ts">
import Logo from "@/assets/logo/vincent-gearbox.png"
import GitHubLogo from "@/assets/logo/github.png"
import { theme } from "@/store/themeStore"


// 切换主题
function switchTheme(){
    $theme === 1 ? theme.setTheme(2) : theme.setTheme(1)
}

</script>

<style lang="scss">
    header{
        transition: background-color 0.5s;
    }
    header.light{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background-color: white;
        height: 70px;
        z-index: 2;
        border-bottom: 1px solid rgba(107, 107, 107, 0.733);
        .left{
            position: relative;
            left: 0;
            height: 100%;
            width: fit-content;
            img{
                top: 8px;
                position: relative;
                height: 80%;
            }
            h3{
                position: relative;
                display: inline;
                top: -14px;
                margin: 0;
                color: black;
                width: fit-content;
            }
        }
        .right{
            position: absolute;
            right: 0;
            bottom: 15px;
            display: inline;
            height: 100%;
            ul{
                padding: 1px;
                width: fit-content;
                li{
                    $normal-color: black;
                    position: relative;
                    color: $normal-color;
                    top: 5px;
                    margin-right: 20px;
                    display: inline;
                    border-bottom: 2px solid $normal-color;
                    transition: color, 0.3s;
                    img{
                        height: 20px;
                    }
                    a{
                        color: $normal-color;
                    }
                    &:hover{
                        $hover-color: rgb(255, 71, 255);
                        cursor: pointer;
                        color: $hover-color;
                        border-bottom: 2px solid $hover-color;
                        a{
                            color: $hover-color;
                        }
                    }
                }
            }
        }
    }
    header.dark{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        background-color: black;
        height: 70px;
        z-index: 2;
        border-bottom: 1px solid rgba(107, 107, 107, 0.733);
        .left{
            position: relative;
            left: 0;
            height: 100%;
            width: fit-content;
            img{
                top: 8px;
                position: relative;
                height: 80%;
            }
            h3{
                position: relative;
                display: inline;
                top: -14px;
                margin: 0;
                color: white;
                width: fit-content;
            }
        }
        .right{
            position: absolute;
            right: 0;
            bottom: 15px;
            display: inline;
            height: 100%;
            ul{
                padding: 1px;
                width: fit-content;
                li{
                    $normal-color: white;
                    color: $normal-color;
                    position: relative;
                    top: 5px;
                    margin-right: 20px;
                    display: inline;
                    border-bottom: 2px solid $normal-color;
                    transition: color, 0.3s;
                    img{
                        height: 20px;
                    }
                    a{
                        color: $normal-color;
                    }
                    &:hover{
                        $hover-color: rgb(255, 71, 255);
                        cursor: pointer;
                        color: $hover-color;
                        border-bottom: 2px solid $hover-color;
                        a{
                            color: $hover-color;
                        }
                    }
                }
            }
        }     
    }

    input[type="checkbox"] {
        transform: scale(60%, 60%) translateY(10px);
        position: relative;
        border: 0;
        appearance: none;
        background: #6e6e6e;
        outline: none;
        width: 80px;
        height: 30px;
        border-radius: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        &::before{
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            top: 0;
            left: 0;
            background-color: #000000;
            transform: scale(1.1);
            border-radius: 20px;
            transition: 750ms ease all;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
    }
    input:checked[type="checkbox"]{
        background-color: rgb(240, 240, 240);
        &::before{
            background-color: #d900ff;
            left: 52px;
        }
    }
    
</style>