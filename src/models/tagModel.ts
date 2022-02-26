import createId from '@/lib/createId';


const tagModel: TagModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    return this.data;
  },
  create(name: string) {
    const id=createId().toString()
    this.data.push({ id, name: name});
    this.save();
    return name;
  },
  update(id: string, name: string) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        console.log((11));
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
      }
    }
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    console.log(77)
    this.data.splice(index, 1);
    this.save()
    return true;
  },
  save() {
    window.localStorage.setItem('tagList', JSON.stringify(this.data));
  }
};
export default tagModel;