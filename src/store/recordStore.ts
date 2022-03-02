import clone from '@/lib/clone';

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
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecords();
  },
};
recordStore.fetchRecords();

export default recordStore;