<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
  background: rgb(255, 218, 39);
  height: calc(100% - 44px - 58px);
  top: 44px;
  bottom: 60px;
}


</style>