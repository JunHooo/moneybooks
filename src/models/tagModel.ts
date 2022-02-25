type TagModel={
  data:string[]
  fetch:()=>string[]
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
    this.data.push(name)
    this.save()
    return name;
  },
  save(){
    window.localStorage.setItem('localRecord', JSON.stringify(this.data));
  }
};
export default tagModel