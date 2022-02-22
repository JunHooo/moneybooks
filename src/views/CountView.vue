<template>
  <div class="nav-wrapper">
      <div class="content">CountView</div>
      <Nav></Nav>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    //当内容超过页面高度时，让导航栏不往下滑
    overflow: auto;
    height:100vh ;
  }
  .content{
    //占据剩下所有页面
    flex-grow: 1;
  }

</style>