<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateMoney" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <Notes field-name="备注" placeholder="在这里输入备注"
           :value="record.notes"
           @update:value="onUpdateNotes"/>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tabs from '@/components/Tabs.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,} from 'vue-property-decorator';
import recordStore from '@/store/recordStore';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tags, Notes, Tabs, NumberPad},
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  recordList = recordStore.recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', money: 0,
  };

  onUpdateTags(value: Tag[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateMoney(value: string) {
    this.record.money = parseFloat(value);
  }

  saveRecord() {
    if(this.record.tags.length===0){
      window.alert("请选择至少一个标签")
    }else{
      recordStore.createRecord(this.record);
      window.alert("已保存")
      this.record.notes=''
    }
  }
}
</script>

<style scoped lang="scss">
 ::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>