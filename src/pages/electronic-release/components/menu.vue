<template>
<div class="release">
    <Row>
        <Col span="3">
            <div class="left">
                <ul>
                    <li v-for="(nav, index) in navlist" :key="index" @click="changeNav(nav)">
                        <div class="img">
                            <img :src="nav.img" alt="">
                        </div>
                        <p>{{$t(nav.name)}}</p>
                    </li>
                </ul>
            </div>
        </Col>
        <Col span="21">
        
            <router-view></router-view>
        </Col>
    </Row>
<!--     <div class="nav">
        <Tabs v-model:active="active" sticky @click-tab="changeNav">
            <Tab v-for="(nav, index) in navlist" :title="nav.name" :name="index">
            </Tab>
        </Tabs>
    </div> -->
    
</div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
import { Tabs, Tab, Row, Col, Button } from 'vant';
import {
    useRouter,
    useRoute
} from 'vue-router';
import { useI18n } from 'vue-i18n'//要在js中使用国际化

const { proxy, ctx } = getCurrentInstance();
const $router = useRouter();
// const { t } = useI18n();

const active = ref(0);

function jump(path){
    $router.push(path);
}



const navlist = reactive([
    {
        name: 'nav.flightInfo',
        path: '/electronic-release/flight-info',
        img: 'src/assets/images/nav_fli.png',
    },{
        name: 'nav.guaranteeApply',
        path: '/electronic-release/guarantee-apply',
        img: 'src/assets/images/nav_apply.png',
    },{
        name: 'nav.guaranteeNode',
        path: '/electronic-release/guarantee-node',
        img: 'src/assets/images/nav_node.png',
    },{
        name: 'nav.runCommunicate',
        path: '/electronic-release/run-communicate',
        img: 'src/assets/images/nav_run.png',
    }
])
function changeNav(item){
    // console.log(navlist[item.name],item)
    $router.push(item.path);
}
onMounted(() => {
    // console.log(proxy);
})

</script>

<style lang="less" scoped>
.release{
    width: 100%;
    .left{
        width: 100%;
        height: 100vh;
        padding-top: 48px;
        box-sizing: border-box;
        ul{
            width: 100%;
            background: --white;
            li{
                width: 100%;
                height: 120px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .img{
                    width: 50px;
                    // height: 50px;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                p{

                }
                &.active{
                    border-right: 3px solid --themeColor;
                    background: --thinThemeColor;
                }
            }
        }
    }
}
</style>
