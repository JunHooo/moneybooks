<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types></Types>
<!--    //给Types.vue的props传递值-->
<!--    <Types :xxx="444"/>-->
    <Notes/>
<!--    <Tags :tag-data="tag"/>-->
<!--    只有加了sync才能配合emit使用，不加则采用第一种添加标签的方法，但是那不规范-->
    <Tags :tag-data.sync="tag"/>
  </Layout>
</template>

<script>
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return{
      tag:['衣','食','住','行','旅游']
    }
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>