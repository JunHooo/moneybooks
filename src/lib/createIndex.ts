let index:number=parseInt(window.localStorage.getItem('_indexMax')||'0')||0
function  createIndex(){
  index++;
  window.localStorage.setItem('_indexMax',index.toString())
  return index
}

export default createIndex