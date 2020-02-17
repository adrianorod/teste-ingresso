<template>
  <div class="header">
    <a href="#/">
      <svg class="icon-logo">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </a>

    <div class="actions">
      <div class="search">
        <svg class="icon-action" @click.prevent="handleSearchInput">
          <use xlink:href="#icon-search"></use>
        </svg>
        <div :class="'input' + (isSearchInputVisible ? ' -is-visible' : '')">
          <input v-model="searchValue" type="text" />
        </div>
      </div>

      <div class="city">
        <div class="city-label" @click.prevent="handleCitySelect">
          <span>{{selectedUF.name}}</span>
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

  isSearchInputVisible: boolean;

  UFList: UFModel[];

  constructor() {
    super();
    this.isCitySelectVisible = false;
    this.isSearchInputVisible = false;
    this.UFList = UF;
  }

  get selectedUF() {
    return this.$store.state.selectedUF;
  }

  get searchValue() {
    return this.$store.state.searchValue;
  }

  set searchValue(value) {
    this.$store.commit('setSearchValue', value);
  }

  handleCitySelect() {
    this.isCitySelectVisible = !this.isCitySelectVisible;
    this.isSearchInputVisible = false;
  }

  handleSearchInput() {
    this.isSearchInputVisible = !this.isSearchInputVisible;
    this.isCitySelectVisible = false;
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
        z-index: 1;

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

    > .search {
      position: relative;

      > .input {
        position: absolute;
        top: 25px;
        left: 50%;
        max-height: 0;
        padding: 0;
        overflow: hidden;
        transition: max-height .3s ease, padding .2s ease;
        transform: translateX(-50%);

        &.-is-visible {
          padding: 8px 0 0;
          max-height: 50px;
        }

        &:after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          background-color: #fff;
          width: 10px;
          height: 10px;
          transform: rotate(45deg) translateX(-50%);
          z-index: -1;
        }

        > input {
          color: #000;
          padding: 6px;
          border-radius: 10px;
          border: 0;
          width: 200px;
        }
      }
    }
  }
}
</style>
