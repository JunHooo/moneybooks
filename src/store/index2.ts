// record store
import recordListModel from '@/models/recordListModel';
import tagModel from '@/models/tagModel';

const store = {

  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),

// tag store
  tagList: tagModel.fetch(),
  createTag: (name: string) => {
    const names = tagModel.data.map(item => item.name);
    if (names && name && name !== '') {
      if (names.indexOf(name) >= 0) {
        window.alert('标签名不能重复！');
        return;
      } else {
        tagModel.create(name);
        window.alert('创建成功！');
      }
    }
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  removeTag: (id: string) => {
    return tagModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagModel.update(id, name);
  },
};

export default store;