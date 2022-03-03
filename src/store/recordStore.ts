import clone from '@/lib/clone';
import createIndex from '@/lib/createIndex';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem('localRecord')||'[]');
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem('localRecord', JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createTime =new Date().toISOString();
    record2.index = createIndex().toString();
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecords();
  },
  removeRecord(index){
    this.recordList.splice(index,1)
    this.saveRecords()
    return true;
  }
};
recordStore.fetchRecords();

export default recordStore;