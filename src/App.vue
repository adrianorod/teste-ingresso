<template>
  <div id="app">
    <SvgSprite></SvgSprite>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SvgSprite from '@/components/SvgSprite.vue';

@Component({
  components: {
    SvgSprite,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import './assets/styles/base';
</style>
