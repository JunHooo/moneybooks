<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateMoney"/>
    <Types @update:value="onUpdateType"></Types>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :tag-data.sync="tags" @update:value="onUpdateTags"/>
    {{record}}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

import {Component} from 'vue-property-decorator';

type Record={
  tags:string[]
  notes:string
  type:string
  money:number
}
@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '旅游'];
  record :Record ={
    tags:[],notes:'',type:'-',money:0
  }
  onUpdateTags(value: string[]) {
    this.record.tags=value;
  }
  onUpdateNotes(value: string) {
    this.record.notes=value;
  }
  onUpdateType(value: string) {
    this.record.type=value;
  }
  onUpdateMoney(value: number) {
    this.record.money=parseFloat(value);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>