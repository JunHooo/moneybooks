const recordListModel={
  clone(data:RecordItem[]|RecordItem){
    return JSON.parse(JSON.stringify(data))
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem('localRecord')|| '[]') as RecordItem[];
  },
  save(data:RecordItem[]){
    window.localStorage.setItem('localRecord', JSON.stringify(data));
  }
};
export default recordListModel
