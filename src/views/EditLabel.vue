<template>
<Layout>
  <div class="navBar">
    <Icon class="leftIcon" name="left" @click.native="goBack"/>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <div class="form-wrapper">
    <Notes    :value="tag.name"
              @update:value="updateTag"
              field-name="标签名" placeholder="请输入标签名"/>
  </div>
  <div class="button-wrapper">
    <Button @click="remove">删除标签</Button>
  </div>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import Icons from '@/components/icons.vue';
import Notes from '@/components/Money/Notes.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2'

@Component({
  components: {Button, Notes, Icons}
})
export default class EditLabel extends Vue{

  // eslint-disable-next-line no-undef
  tag?: Tag = undefined;

  created(){
    this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      //注意replace和push的区别
      this.$router.replace('/notFound')
    }
  }
  updateTag(name:string){
    if(this.tag){
      store.updateTag(this.tag.id,name)
    }
  }
  remove(){
    let isConfirm= window.confirm("是否确定删除此标签？")
    if(isConfirm){
      if(this.tag){
        if(store.removeTag(this.tag.id)){
          this.$router.back()
        }else{
          window.alert("删除失败")
        }
      }
    }
  }
  goBack(){
    this.$router.back()
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