import { TableHeadElementType } from 'types'

export const TABLET_HEADER: TableHeadElementType[] = [
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
