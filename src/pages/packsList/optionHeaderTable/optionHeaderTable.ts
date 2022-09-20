import { TableHeadElementType } from 'types'

export const TABLET_HEADER_PACK_LIST: TableHeadElementType[] = [
  {
    title: 'Cover',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
  {
    title: 'Name',
    sortParam: 'name',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Cards',
    sortParam: 'cardsCount',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Last updated',
    sortParam: 'updated',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Create by',
    sortParam: 'user_name',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Action',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
]
