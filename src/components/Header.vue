<template>
  <div class="header">
    <a href="#/">
      <svg class="icon-logo">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </a>

    <div class="actions">
      <div class="search-select">
        <svg class="icon-action">
          <use xlink:href="#icon-search"></use>
        </svg>
      </div>

      <div class="city-select">
        <span>São Paulo</span>
        <svg class="icon-action">
          <use xlink:href="#icon-city"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Header extends Vue {
}
</script>

<style lang="scss">
.header {
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 8px;
  font-family: Proxima Nova Bold;
  font-size: .8125rem;

  .icon-logo {
    height: 35px;
    width: 200px;
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

    > .city-select {
      cursor: pointer;
      align-items: center;
      display: flex;
      margin-left: 10px;
    }
  }
}
</style>
