<template>
<div class="nav-wrapper">
  <div class="content"><slot></slot></div>
  <Nav></Nav>
</div>
</template>

<script lang="ts">
export default {
name: "LayoutCom"
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height:100vh ;
}
.content{
  //当内容超过页面高度时，让导航栏不往下滑
  overflow: auto;
  //占据剩下所有页面
  flex-grow: 1;
}
</style>