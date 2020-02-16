<template>
  <div id="app">
    <SvgSprite></SvgSprite>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import SvgSprite from '@/components/SvgSprite.vue';

@Component({
  components: {
    Header,
    SvgSprite,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import './assets/styles/base';
</style>
