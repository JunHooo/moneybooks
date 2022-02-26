import clone from '@/lib/clone';
const recordListModel={
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.time = new Date();
    this.data.push(record2);
    this.save();
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem('localRecord')|| '[]') as RecordItem[];
  },
  save(){
    window.localStorage.setItem('localRecord', JSON.stringify(this.data));
  }
};
export default recordListModel
