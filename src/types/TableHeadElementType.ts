import { SortParamElementType, SortParamType } from 'types'

export type TableHeadElementType = {
  title: string
  sortParam: SortParamType
  stateSortElement: SortParamElementType
  type: 'sort' | 'noSort'
}
