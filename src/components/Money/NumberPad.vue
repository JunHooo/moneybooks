<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent" >2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero"  @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output='0';
  inputContent(event:MouseEvent){
    const button = (event.target as HTMLButtonElement);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const input = button.textContent!;
    if(this.output.length<18){
      if(this.output.indexOf('0')===0 && this.output.length===1){
        if(input==='0'||'123456789'.indexOf(input)>=0) {
          this.output =input;
        }else{
          this.output+=input;
        }
      }else if(this.output.indexOf('.')===-1){
        this.output+=input;
      }else{
        if(input==='.'){
          return this.output;
        }else{
          this.output+=input;
        }
      }
    }
    else{
      return ;
    }
  }
  remove(){
    if(this.output.length>1) {
      this.output=this.output.slice(0,-1)
    }else{
      this.output='0';
    }
  }
  clear(){
    this.output='0'
  }
  ok(){
    this.$emit('update:value',parseFloat(this.output))
    this.$emit('submit',parseFloat(this.output))
    this.output='0';
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    // Consolas(微软的等宽字体),如果没有则会匹配后面的monospace(等宽)
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64*2px;
        float: right;
      }
      &.zero {
        width: 25*2%;
      }
      $bg: rgb(250,250,250);
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 2%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 2*2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 2*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 2*4%);
      }
      &:nth-child(14) {
        background: darken($bg, 2*5%);
      }
      &:nth-child(12) {
        background:rgba(255, 218, 39,0.5)
      }
    }
  }
}
</style>