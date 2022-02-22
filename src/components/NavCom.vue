<template>
  <div>
    <nav>
      <router-link to="/money">记账</router-link>
      |
      <router-link to="/tip">标签</router-link>
      |
      <router-link to="/count">统计</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav'
}
</script>

<style scoped>
  nav{
    padding: 0;
  }
</style>