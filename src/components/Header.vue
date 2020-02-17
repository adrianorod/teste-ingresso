<template>
  <div class="header">
    <a href="#/">
      <svg class="icon-logo">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </a>

    <div class="actions">
      <div class="search">
        <svg class="icon-action">
          <use xlink:href="#icon-search"></use>
        </svg>
      </div>

      <div class="city">
        <div class="city-label" @click.prevent="handleCitySelect">
          <span>{{$store.state.selectedUF.name}}</span>
          <svg class="icon-action">
            <use xlink:href="#icon-city"></use>
          </svg>
        </div>
        <ul :class="'city-select' + (isCitySelectVisible ? ' -is-visible' : '')">
          <li v-for="city in UFList" :key="city.id" @click.prevent="selectCity(city)">
            {{city.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UFModel from '@/models/uf.model';
import UF from '@/utils/constants';

@Component({
  components: {},
})
export default class Header extends Vue {
  isCitySelectVisible: boolean;

  UFList: UFModel[];

  constructor() {
    super();
    this.isCitySelectVisible = false;
    this.UFList = UF;
  }

  handleCitySelect() {
    this.isCitySelectVisible = !this.isCitySelectVisible;
  }

  selectCity(city: UFModel) {
    this.$store.commit('setSelectedUf', city);
    this.isCitySelectVisible = false;
  }
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.header {
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 8px;
  font-family: Proxima Nova Bold;
  font-size: .8125rem;

  .icon-logo {
    height: 35px;
    transition: width .3s ease;

    @include mobile {
      width: 120px;
    }

    @include desktop {
      width: 200px;
    }
  }

  .icon-action {
    cursor: pointer;
    fill: #21A1DE;
    width: 23px;
    height: 23px;
  }

  > .actions {
    align-items: center;
    display: flex;

    > .city {
      cursor: pointer;
      margin-left: 10px;
      position: relative;

      > .city-label {
        align-items: center;
        display: flex;
      }

      > .city-select {
        list-style: none;
        padding: 0;
        overflow: hidden;
        width: max-content;
        max-height: 0;
        transition: max-height .3s ease, padding .2s ease;
        position: absolute;
        top: 12px;
        right: 4px;

        &.-is-visible {
          padding: 5px 0 0;
          max-height: 200px;
        }

        &:after {
          content: '';
          position: absolute;
          top: 1px;
          right: 2px;
          background-color: #252525;
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
          z-index: -1;
        }

        > li {
          background-color: #252525;
          border-radius: 10px 0 10px 10px;
          padding: 8px 15px;
          margin-bottom: 2px;

          &:hover {
            background-color: #000;
          }
        }
      }
    }
  }
}
</style>
