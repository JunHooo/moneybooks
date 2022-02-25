<template>
    <label class="notes">
      <span class="name">{{fieldName}}</span>
<!--      <input type="text" :value="x" placeholder="在这里输入备注" @input="x =$event.target.value" >-->
<!--      使用v-model代替 ：value 和 @input绑定-->
      <input type="text"  :placeholder="placeholder" v-model="value" >
    </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value='';
  @Prop({required:true}) fieldName!:string;
  @Prop() placeholder?:string
  @Watch('value')
  onNoteChange(value:string){
    this.$emit('update:value',value)
  }

}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>