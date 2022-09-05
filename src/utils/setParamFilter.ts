import { SortParamElementType, SortParamType, TableHeadElementType } from 'types'

export const setParamFilter = (
  headData: TableHeadElementType[],
  filterActive: SortParamType,
  stateSortElement: SortParamElementType
): TableHeadElementType[] | false => {
  let index = 0
  let headDataOff: TableHeadElementType[] = []

  for (let i = 0; i < headData.length; i += 1) {
    if (headData[i].sortParam === filterActive) {
      index += 1
      headDataOff.push({ ...headData[i] })
      headDataOff[i].stateSortElement = stateSortElement
    } else {
      headDataOff.push({ ...headData[i] })
      headDataOff[i].stateSortElement = 'off'
    }
  }

  return index ? headDataOff : false
}
