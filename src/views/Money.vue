<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateMoney" @submit="saveRecord"/>
    <Types @update:value="onUpdateType"></Types>
    <Notes field-name="备注" placeholder="在这里输入备注"
           @update:value="onUpdateNotes"/>
    <Tags :tag-data.sync="tags" @update:value="onUpdateTags"/>
    {{ recordList }}
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel.ts'
import tagModel from '@/models/tagModel';

const recordList=recordListModel.fetch()


@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  recordList: RecordItem[] = recordList;
  tags = window.tagList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', money: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }

  onUpdateMoney(value: string) {
    this.record.money = parseFloat(value);
  }
  saveRecord() {
    this.record.time=new Date;
    const deepClone = recordListModel.clone(this.record);
    this.recordList.push(deepClone);
  }

  @Watch('recordList')
  onRecordChange() {
    recordListModel.save(this.recordList)
  }


}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>