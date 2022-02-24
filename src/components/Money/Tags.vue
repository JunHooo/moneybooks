<template>
  <div class="tags">
    <div class="new">
      <button @click="add">新增标签</button>
    </div>
    <ul class="current">
      <!--      如果tag存在于selectTags中，那么为该li加上class selected-->
      <!--      :class="{selected:selectTags.indexOf(tag)>=0}-->
      <li v-for="tag in tagData" :key="tag"
          :class="{selected:selectTags.indexOf(tag)>=0}"
          @click="select(tag)">{{ tag }}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) tagData: string[] | undefined;
  selectTags: string[] = [];


  select(tag: string) {
    let index=this.selectTags.indexOf(tag)
    if(index>=0){
      this.selectTags.splice(index,1)
    }else{
      this.selectTags.push(tag);
    }
  }
  add(){
    let name=window.prompt("请输入标签名");
    // if(name===''){
    //   window.alert("标签名不能为空")
    // }else if(this.tagData){
    //   this.tagData.push(name as string)
    // }
    if(name===''){
      window.alert("标签名不能为空")
    }else if(this.tagData){
      this.$emit('update:tagData',[...this.tagData,name])
    }
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
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
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