type Tag={
  id:string;
  name:string;
}
type TagModel={
  data:Tag[]
  fetch:()=>Tag[]
  create:(name:string)=>string
  save:()=>void
}
const tagModel:TagModel={
  data:[],
  fetch(){
    this.data= JSON.parse(window.localStorage.getItem('localRecord')|| '[]') ;
    return this.data
  },
  create(name:string){
    const names=this.data.map(item=>item.name)
    this.data.push({id:name,name:name})
    this.save()
    return name;
  },
  save(){
    window.localStorage.setItem('localRecord', JSON.stringify(this.data));
  }
};
export default tagModel