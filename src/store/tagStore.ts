import createId from '@/lib/createId';
const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    if (!this.tagList || this.tagList.length === 0) {
      tagStore.createTag('衣');
      tagStore.createTag('食');
      tagStore.createTag('住');
      tagStore.createTag('行');
    }
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name);

    if (names && name && name !== '') {
      if (names.indexOf(name) >= 0) {
        window.alert('标签名不能重复！');
        return;
      } else {
        const id = createId().toString();
        this.tagList.push({id, name: name});
        this.saveTags();
      }
    }
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags()
    return true;
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签名不能重复！")
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTags();
      }
    }
  },
  saveTags() {
    window.localStorage.setItem('tagList', JSON.stringify(this.tagList));
  }
};
tagStore.fetchTags();

export default tagStore;