<template>
<Layout>
  编辑
</Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import tagModel from '@/models/tagModel';
@Component
export default class EditLabel extends Vue{

  created(){
    const id =this.$route.params.id
    tagModel.fetch()
    const tags=tagModel.data;
    const tag=tags.filter(t=>t.id===id)[0]
    if(tag){
      console.log(tag)
    }else{
      //注意replace和push的区别
      this.$router.replace('/notFound')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>