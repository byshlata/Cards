import React, { useEffect } from 'react'

import { Pagination } from 'antd'
import { TableUsers, TitleWithButton } from 'components'
import { FilterContainerUsers } from 'components/filterContainerUsers/FilterContainerUsers'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useCustomSearchParams } from 'hooks/useCustomSearchParams'
import { TABLET_HEADER_USERS } from 'pages/users/optionHeaderTable/optionHeaderTable'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getPackData,
  getUsers,
  initialStateUsersParams,
  removeUsersData,
  selectorCountPageUsers,
  selectorCurrentPageUsers,
  selectorIsLoading,
  selectorTotalCountUsers,
  setPackParams,
  setUsersParams,
} from 'store'
import { BackValueType, UsersParamsType } from 'types'

import style from './Users.module.sass'

export const Users = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)

  const totalCountUsers = useSelector(selectorTotalCountUsers)
  const currentPageUsers = useSelector(selectorCurrentPageUsers)
  const countPageUsers = useSelector(selectorCountPageUsers)

  const navigate = useNavigate()

  const { searchParams, paramsURL, setURLParams, resetURLParams } =
    useCustomSearchParams<UsersParamsType>(initialStateUsersParams)

  useEffect(() => {
    if (Object.keys(Object.fromEntries(searchParams)).length) {
      dispatch(setUsersParams(paramsURL))
      dispatch(getUsers(paramsURL))
    }
  }, [searchParams])

  useEffect(() => {
    return () => {
      dispatch(removeUsersData())
    }
  }, [])

  const onSearch = (searchValue: string) => {
    setURLParams({ userName: searchValue })
  }

  const onChangeSlider = (max: number, min: number) => {
    setURLParams({ max: max, min: min })
  }

  const onResetFilter = () => {
    resetURLParams()
  }

  const onChangePagination = (page: number, pageSize: number) => {
    setURLParams({ page: page, pageCount: pageSize })
  }

  const onSortColumn = (sortValue: string) => {
    setURLParams({ sortUsers: sortValue })
  }

  const onNavigatePackList = () => {
    navigate(`${Path.PacksList}`)
  }

  const onClickTableAction = (userId: string, backValue: BackValueType) => {
    navigate(`${Path.Profile}`)
  }

  return (
    <div className={style.usersWrapper}>
      <TitleWithButton
        titleText="All User"
        buttonText="Back to Packs List"
        onClick={onNavigatePackList}
      />
      <div className={style.filterElementWrapper}>
        <FilterContainerUsers
          disabled={isLoading}
          onSearchName={onSearch}
          onChangeSlider={onChangeSlider}
          onResetFilter={onResetFilter}
        />
        <TableUsers
          headTableData={TABLET_HEADER_USERS}
          sortParams={paramsURL.sortUsers}
          onClickTableAction={onClickTableAction}
          onSortColumn={onSortColumn}
        />
        <Pagination
          disabled={isLoading}
          showQuickJumper
          defaultCurrent={countPageUsers}
          current={currentPageUsers}
          total={totalCountUsers}
          onChange={onChangePagination}
        />
      </div>
    </div>
  )
}
