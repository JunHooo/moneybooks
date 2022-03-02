<template>
  <div class="tags">
    <div class="new">
      <button @click="add">新增标签</button>
    </div>
    <ul class="current">
      <!--      如果tag存在于selectTags中，那么为该li加上class selected-->
      <!--      :class="{selected:selectTags.indexOf(tag)>=0}-->
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectTags.indexOf(tag)>=0}"
          @click="select(tag)">{{ tag.name }}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import store from '@/store/index2';

@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
  selectTags: string[] = [];


  select(tag: string) {
    let index=this.selectTags.indexOf(tag)
    if(index>=0){
      this.selectTags.splice(index,1)
    }else{
      this.selectTags.push(tag);
    }
    this.$emit('update:value',this.selectTags)
  }
  add(){
    let name=window.prompt("请输入标签名");
    // if(name===''){
    //   window.alert("标签名不能为空")
    // }else if(this.tagData){
    //   this.tagData.push(name as string)
    // }
    if (!name) { return window.alert('标签名不能为空!!'); }
    store.createTag(name);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: red;
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>