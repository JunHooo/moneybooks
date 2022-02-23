<template>
  <div>
    <nav>
      <router-link to="/money">
        <Icon name="money"></Icon>
        记账
      </router-link>
      |
      <router-link to="/tip">
        <Icon name="tip"></Icon>
        标签
      </router-link>
      |
      <router-link to="/count">
        <Icon name="count"></Icon>
        统计
      </router-link>
    </nav>

  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  padding: 0;
  border:1px solid red;
}
</style>