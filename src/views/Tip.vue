<template>
  <div>
    <Layout>
      <div class="tags">
        <ul>
          <li v-for="tag in tags" :key="tag.id">
            <span>{{tag.name}}</span>
          </li>
        </ul>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新增标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagModel from '@/models/tagModel';
tagModel.fetch()


@Component
export default class Tip extends Vue{
  tags=tagModel.data;

  createTag(){
   const name= window.prompt("请输入标签名")
    const names=tagModel.data.map(item=>item.name)
    if(names){
      if(names.indexOf(name)>=0){
        window.alert("标签名不能重复！")
        return;
      }else{
        tagModel.create(name)
        window.alert("创建成功！")
        console.log(tagModel.data)
      }
    }else{
      window.alert("标签名不能为空！")
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>