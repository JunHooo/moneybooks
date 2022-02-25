<template>
<Layout>
  <div class="navBar">
    <Icon class="leftIcon" name="left"/>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <div class="form-wrapper">
    <Notes    :value="tag.name"
              field-name="标签名" placeholder="请输入标签名"/>
  </div>
  <div class="button-wrapper">
    <Button>删除标签</Button>
  </div>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagModel from '@/models/tagModel';
import Icons from '@/components/icons.vue';
import Notes from '@/components/Money/Notes.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, Notes, Icons}
})
export default class EditLabel extends Vue{

  tag?:{id:string,name:string}=undefined;

  created(){
    const id =this.$route.params.id
    tagModel.fetch()
    const tags=tagModel.data;
    const tag=tags.filter(t=>t.id===id)[0]
    if(tag){
      this.tag=tag
    }else{
      //注意replace和push的区别
      this.$router.replace('/notFound')
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>