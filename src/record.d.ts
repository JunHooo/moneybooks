//以.d.ts结尾的文件定义全局类型
type RecordItem = {
  tags: string[]
  notes: string
  type: string
  money: number
  time?:Date
}
type Tag = {
  id: string;
  name: string;
}
type TagModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => void
  update: (id: string, name: string) => void
  remove: (id: string) => boolean
  save: () => void

}
interface Window {
  tagList: Tag[]
  createTag: (name: string) => void
  findTag: (id: string) => Tag | undefined;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => void
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void
}