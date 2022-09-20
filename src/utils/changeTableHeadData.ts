import { TABLET_HEADER_PACK_LIST } from 'pages/packsList/optionHeaderTable/optionHeaderTable'
import { TableHeadElementType } from 'types'

export const changeTableHeadData = (tableHeadData: TableHeadElementType[], initSortParam: string) =>
  tableHeadData.map((sortFilter) => {
    const sortParam = initSortParam.slice(1)
    const propertySortParam = initSortParam.substring(0, 1)

    const sortFilterCopy = { ...sortFilter }

    if (sortFilterCopy.sortParam === sortParam) {
      if (propertySortParam === '1') {
        sortFilterCopy.stateSortElement = 'up'
      } else if (propertySortParam === '0') {
        sortFilterCopy.stateSortElement = 'down'
      }
      return sortFilterCopy
    }
    return sortFilterCopy
  })
