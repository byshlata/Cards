import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import style from './App.module.sass'

import { Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { Loader } from 'components/loader/Loader'
import { useAppDispatch } from 'hooks'
import { Routers } from 'pages'
import { fetchProfilePage, selectorError, selectorIsLoading, selectorsIsInitialized } from 'store'
import styleMain from 'styles/container.module.sass'

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
    </>
  )
}
