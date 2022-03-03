<template>
  <div>
    <ol>
      <div class="all">
        <li>你几号</li>
        <span></span>
      </div>
      <div>
        <li>我好像</li>
        <span>删除</span>
      </div>
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      lastIndex: '',
      cruentIndex: '',
      startX: '',
      endX: '',
      left: '',
      right: '',
    }
  },
  methods: {
    touchstart(e) {
      let index = e.currentTarget.id
      this.startX = e.touches[0].clientX
      if (this.lastIndex !== index) {
        this.cruentIndex = this.lastIndex
        this.right = '-150rpx'
        this.left = '0'
      }
    },
    touchmove(e) {
      this.endX = e.touches[0].clientX
      let index = e.currentTarget.id
      let cha = this.startX - this.endX

      if (cha > 30) {
        this.cruentIndex = index
        this.right = '0'
        this.left = '-150rpx'
      } else {
        this.cruentIndex = index
        this.right = '-150rpx'
        this.left = '0'
      }
      this.lastIndex = this.cruentIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.all{
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  overflow: hidden;
}
li {
  width: 100vw;
  height: 10vh;
  border: 1px solid red;
}
span{
  width: 200px;
  background: red;
}
</style>
