<template>
  <svg class="icon">
<!--    <use v-bind:xlink:href='"#"+name'></use>-->
<!--    v-bind:link:href的另一种写法，与下面的props配合使用-->
    <use :xlink:href='"#"+name'></use>
  </svg>
</template>

<script lang="ts">
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
export default {
  props:['name'],
  name: "icons"
}
</script>

<style lang="scss" >
.icon {
  height: 32px;
  width: 32px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>