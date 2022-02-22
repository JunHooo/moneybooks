<template>
  <div class="nav-wrapper">
    <div class="content">CountView</div>
    <Nav class="nav"></Nav>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    border: 1px solid red;
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
  .nav{

  }
  .content{
    flex-grow: 1;
  }
</style>