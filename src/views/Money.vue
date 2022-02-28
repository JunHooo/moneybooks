<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateMoney" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <Notes field-name="备注" placeholder="在这里输入备注"
           @update:value="onUpdateNotes"/>
    <Tags @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tabs from '@/components/Tabs.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,} from 'vue-property-decorator';
import store from '@/store/index2';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tags, Notes, Tabs, NumberPad},
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  recordList = store.recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', money: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateMoney(value: string) {
    this.record.money = parseFloat(value);
  }

  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>