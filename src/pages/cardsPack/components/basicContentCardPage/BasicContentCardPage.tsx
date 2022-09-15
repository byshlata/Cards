import React from 'react'

import { Pagination } from 'antd'
import { ButtonResetFilter, Search, TableCard } from 'components'
import { useSelector } from 'react-redux'
import { selectorCardsTotalCount, selectorCountPageCard, selectorCurrentPageCard } from 'store'
import { BackValueType, TableHeadElementType } from 'types'

import style from './BasicContentCardPage.module.sass'

type BasicContentCardPageType = {
  tableHeadData: TableHeadElementType[]
  searchCardQuestion: string
  sortParam: string
  disabled: boolean
  onClickActionTable?: (
    idCard: string,
    question: string,
    answer: string,
    action: BackValueType
  ) => void
  onSortColumn: (sortValue: string) => void
  onChangePagination: (page: number, pageSize: number) => void
  onSearchByQuestion: (searchValue: string) => void
  onResetFilter: () => void
}

export const BasicContentCardPage = ({
  tableHeadData,
  disabled,
  searchCardQuestion,
  sortParam,
  onClickActionTable,
  onSortColumn,
  onSearchByQuestion,
  onChangePagination,
  onResetFilter,
}: BasicContentCardPageType) => {
  const totalCard = useSelector(selectorCardsTotalCount)
  const currentPageCard = useSelector(selectorCurrentPageCard)
  const countPageCard = useSelector(selectorCountPageCard)

  const errorSearchValue = totalCard ? '' : !searchCardQuestion ? '' : 'Cards not found'

  return (
    <>
      <div>
        <div className={style.filterWrapper}>
          <Search
            disabled={disabled}
            searchValue={searchCardQuestion}
            error={errorSearchValue}
            onChangeDebounceValue={onSearchByQuestion}
          />
          <ButtonResetFilter onResetFilter={onResetFilter} disabled={disabled} />
        </div>
        <TableCard
          headTableData={tableHeadData}
          sortParam={sortParam}
          onClickActionTable={onClickActionTable}
          onSortColumn={onSortColumn}
        />
        <Pagination
          disabled={disabled}
          showQuickJumper
          defaultCurrent={countPageCard}
          current={currentPageCard}
          total={totalCard}
          onChange={onChangePagination}
        />
      </div>
    </>
  )
}
