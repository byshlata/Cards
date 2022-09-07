import { TableHeadElementType } from 'types'

export const TABLET_HEADER_AUTH_USER: TableHeadElementType[] = [
  {
    title: 'Question',
    sortParam: 'question',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Answer',
    sortParam: 'answer',
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
    title: 'Grad',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
  {
    title: 'Action',
    sortParam: '',
    stateSortElement: '',
    type: 'noSort',
  },
]
