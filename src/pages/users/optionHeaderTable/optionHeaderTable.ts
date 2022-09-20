import { TableHeadElementType } from 'types'

export const TABLET_HEADER_USERS: TableHeadElementType[] = [
  {
    title: 'Avatar',
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
    title: 'Number of pack',
    sortParam: 'publicCardPacksCount',
    stateSortElement: 'off',
    type: 'sort',
  },
  {
    title: 'Create',
    sortParam: 'created',
    stateSortElement: 'off',
    type: 'sort',
  },
]
