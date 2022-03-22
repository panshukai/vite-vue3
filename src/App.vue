<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive, getCurrentInstance, onMounted } from 'vue';
import { Locale } from 'vant';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US.js';
import zhCN from 'vant/es/locale/lang/zh-CN.js';

import { useI18n } from 'vue-i18n'
const { locale } = useI18n()


const { proxy } = getCurrentInstance();

function theme(type){
  window.document.documentElement.setAttribute('data-theme', type);
}

function change(type) {
    // zh: 中文
    // en: 英文
    if(type == localStorage.getItem('lang')) return ;
    localStorage.setItem('lang', type)

    proxy.$i18n.locale = type;

    if(type == 'en'){
      console.log(type, Locale)
        Locale.use('en-US', enUS);
    }else{
        Locale.use('zh-CN', zhCN);
    }
}
</script>

<template>
  <a href="javascript:;" @click="change('zh')">中文</a>
  <a href="javascript:;" @click="change('en')">英文</a>
  <!-- <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div> -->
  <a href="javascript:;" @click="theme('light')">白</a>
  <a href="javascript:;" @click="theme('dark')">黑</a>
  <!-- vue3.0配置 -->
  <router-view v-if="!isMicroApp" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="keep"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="keep" v-if="!$route.meta.keepAlive"/>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

</style>
