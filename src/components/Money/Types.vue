<template>
  <div>
    <ul class="types">
      <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  //'-'代表支出，'+'代表收入
  type = '-';

  //ts写法中type需要添加类型
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknow');
    }
    this.type = type;
    // 直接传值会出现重复点击时，多次传相同的值
    // this.$emit('update:value',this.type)
  }
  //watch可以监听变化
  @Watch('type')
    onTypeChange(value:string){
      this.$emit('update:value',value)
    }
}

  //Props告诉Vue.xxx不是data 是prop
  //Number 告诉Vue xxx是个Number
  //xxx是属性名
  //number | undefined 就是xxx的类型
  //配合V-bind 从MoneyView中传递参数
  // @Prop(Number) xxx=0;
  // @Prop(Number) xxx: number | undefined;
  // mounted() {
  //   //一定要排除undefined的情况
  //   if (this.xxx !== undefined) {
  //     console.log(this.xxx);
  //   }
  // }
// }
</script>
<!--//JS的写法-->
<!--<script>-->
<!--  export default {-->
<!--    name:'Types',-->
<!--     data(){-->
<!--       return{-->
<!--         type:'-',-->
<!--       }-->
<!--     },-->
<!--     methods:{-->
<!--       selectType(type){-->
<!--         if(type!=='-'&&type!=='+'){-->
<!--           throw new Error('type is unknow')-->
<!--         }-->
<!--         this.type=type;-->
<!--       }-->
<!--     }-->
<!--  }-->
<!--</script>-->

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>