import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { useCustomSearchParams } from 'hooks/useCustomSearchParams'
import { CardsPackAuthUser, CarsPackAllUser } from 'pages'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getCardData,
  initialStateCardParams,
  removeCardData,
  selectorAuthUserId,
  selectorIsLoading,
  selectorPackUserId,
  selectorTitlePack,
  setCardParams,
} from 'store'
import { CardParamsType } from 'types'

export const CardsPack = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectorIsLoading)
  const titlePack = useSelector(selectorTitlePack)
  const authUserId = useSelector(selectorAuthUserId)
  const userId = useSelector(selectorPackUserId)

  const param = useParams<'id'>()

  const idPack = param.id

  const { searchParams, paramsURL, setURLParams, resetURLParams } =
    useCustomSearchParams<CardParamsType>(initialStateCardParams)

  useEffect(() => {
    setURLParams({ cardsPack_id: idPack })

    return () => {
      dispatch(removeCardData())
    }
  }, [])

  useEffect(() => {
    if (Object.keys(Object.fromEntries(searchParams)).length) {
      dispatch(setCardParams(paramsURL))
      dispatch(getCardData(paramsURL))
    }
  }, [searchParams])

  const isAuthUser = authUserId === userId

  const onSortColumn = (sortValue: string) => {
    setURLParams({ sortCards: sortValue })
  }

  const onChangePagination = (page: number, pageSize: number) => {
    setURLParams({ page: page, pageCount: pageSize })
  }

  const onSearchByQuestion = (searchValue: string) => {
    setURLParams({ cardQuestion: searchValue })
  }

  const onResetFilter = () => {
    resetURLParams()
  }

  if (userId) {
    return (
      <>
        <ButtonBack link={`${Path.PacksList}`}>Back to Pack List</ButtonBack>
        {isAuthUser ? (
          <CardsPackAuthUser
            titlePack={titlePack}
            idPack={idPack}
            onSearchByQuestion={onSearchByQuestion}
            onSortColumn={onSortColumn}
            onChangePagination={onChangePagination}
            onResetFilter={onResetFilter}
          />
        ) : (
          <CarsPackAllUser
            titlePack={titlePack}
            idPack={idPack}
            onSearchByQuestion={onSearchByQuestion}
            onSortColumn={onSortColumn}
            onChangePagination={onChangePagination}
            onResetFilter={onResetFilter}
          />
        )}
      </>
    )
  }
  return null
}
