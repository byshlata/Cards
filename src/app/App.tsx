import React, { useEffect } from 'react'

import { Header, LinerProgress, CustomAlert, Loader } from 'components'
import { useAppDispatch } from 'hooks'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import {
  fetchProfilePage,
  selectorError,
  selectorIsLoading,
  selectorsIsInitialized,
  selectorWarningMessage,
} from 'store'
import styleMain from 'styles/container.module.sass'

import style from './App.module.sass'

export const App = () => {
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const errorMessage = useSelector(selectorError)
  const warningMessage = useSelector(selectorWarningMessage)
  const isInitialized = useSelector(selectorsIsInitialized)

  useEffect(() => {
    dispatch(fetchProfilePage())
  }, [])

  if (isInitialized) {
    return <Loader />
  }

  return (
    <>
      <CustomAlert severity="error" message={errorMessage} />
      <CustomAlert severity="success" message={warningMessage} />
      <Header />
      <div className={style.linerProgressWrapper}>
        <LinerProgress isLoading={isLoading} />
      </div>
      <div className={styleMain.container}>
        <Routers />
      </div>
    </>
  )
}
