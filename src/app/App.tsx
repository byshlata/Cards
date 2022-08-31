import React, { useCallback, useEffect } from 'react'

import { Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { IconSortElementSvg } from 'components/iconSVG/iconSortElementSVG/IconSortElementSVG'
import { Loader } from 'components/loader/Loader'
import { SortElement } from 'components/sortElement/SortElement'
import { useAppDispatch } from 'hooks'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import { fetchProfilePage, selectorError, selectorIsLoading, selectorsIsInitialized } from 'store'
import styleMain from 'styles/container.module.sass'

import style from './App.module.sass'

export const App = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const errorMessage = useSelector(selectorError)
  const isInitialized = useSelector(selectorsIsInitialized)

  useEffect(() => {
    dispatch(fetchProfilePage())
  }, [])

  if (isInitialized) {
    return <Loader />
  }

  const onSortParam = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <CustomAlert severity="error" message={errorMessage} />
      <Header />
      <div className={style.linerProgressWrapper}>
        <LinerProgress isLoading={isLoading} />
      </div>
      <div className={styleMain.container}>
        <Routers />
      </div>

      <SortElement onSort={onSortParam} sortParam={'_id'} />
    </>
  )
}
