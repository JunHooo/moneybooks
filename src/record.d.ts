//以.d.ts结尾的文件定义全局类型
type RecordItem = {
  index:string
  tags: Tag[]
  notes: string
  type: string
  money: number
  createTime?:any
}
type Tag = {
  id: string;
  name: string;
}
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}