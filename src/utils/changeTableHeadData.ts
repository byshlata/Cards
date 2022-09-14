import { TableHeadElementType } from 'types'

export const changeTableHeadData = (tableHeadData: TableHeadElementType[], initSortParam: string) =>
  tableHeadData.map((sortFilter) => {
    const sortParam = initSortParam.slice(1)
    const propertySortParam = initSortParam.substring(0, 1)

    if (sortFilter.sortParam === sortParam) {
      if (propertySortParam === '1') {
        sortFilter.stateSortElement = 'up'
      } else {
        sortFilter.stateSortElement = 'down'
      }
      return sortFilter
    }
    return sortFilter
  })
