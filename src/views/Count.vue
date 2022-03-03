<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <ol v-if="groupedList.length!==0">
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">{{ beautify(group.title) }} <span>￥{{ group.total }}</span></h3>
        <ol>
          <li v-for="(item,Sindex) in group.items" :key="item.id"
              class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.money }} </span>
            <div @click="remove(groupedList[index].items[Sindex])">
              <Icon name="delete"></Icon>
            </div>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="blank">
      <span>未查询到相关记录</span>
      <br>
      <br>
      <router-link to="/money">
        <Icon name="write"></Icon>
        <span>记一笔</span></router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import recordStore from '@/store/recordStore';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import Button from '@/components/Button.vue';


@Component({
  components: {Button, Tabs},
})
export default class Count extends Vue {
  inject: ['reload']
  type = '-';
  recordTypeList = recordTypeList;

  beforeCreate() {
    recordStore.fetchRecords();

  }

  tagString(tags) {
    return tags.length === 0 ? '无' :
        tags.map(t => t.name).join('，');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  get groupedList() {
    let recordList = this.recordList;
    if (recordList.length === 0) {return [];}
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf());
    if (newList.length === 0) {
      return [] as Result;
    }
    type Result = { title: string, total?: number, items: RecordItem[] }[];
    const result: Result = [{title: dayjs(newList[0].createTime).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createTime), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createTime).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.money;
      }, 0);
    });
    return result;
  }
  remove(record) {
    let indexList=this.recordList.map(item => item.index);
    let v= indexList.findIndex(value=>(value===record.index))
    const isDelete =window.confirm("是否确定删除该条记录？")
    if(isDelete){
      this.recordList.splice(v,1)
      // recordStore.saveRecords()
      this.reload()
    }
  }

  get recordList() {
    return recordStore.recordList;
  }
}
</script>

<style scoped lang="scss">
.blank {
  padding: 16px 0;
  text-align: center;
}

::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #C4C4C4;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  background: white;
  @extend %item;
}

.record:hover > .icon {
  display: block;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

.icon {
  height: 24px;
  right: 0;
  color: red;
}
</style>