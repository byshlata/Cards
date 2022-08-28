import React, { useEffect, useState } from 'react'

import { CustomButton, Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { Loader } from 'components/loader/Loader'
import { useAppDispatch } from 'hooks'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import {
  fetchProfilePage,
  selectorError,
  selectorIsAuth,
  selectorIsLoading,
  selectorsIsInitialized,
} from 'store'
import { getPackData } from 'store/thunk/pakcThunk'
import styleMain from 'styles/container.module.sass'

import style from './App.module.sass'

export const App = () => {
  const [sendPackData, setSendPackData] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const isLoading = useSelector(selectorIsLoading)
  const errorMessage = useSelector(selectorError)
  const isInitialized = useSelector(selectorsIsInitialized)
  const isAuth = useSelector(selectorIsAuth)

  useEffect(() => {
    dispatch(fetchProfilePage())
  }, [])

  useEffect(() => {
    if (sendPackData) {
      dispatch(getPackData({ packName: 'eng', sortPacks: '' }))
    }
  }, [sendPackData])

  if (isInitialized) {
    return <Loader />
  }

  const onSendPackData = () => {
    setSendPackData(!sendPackData)
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

      <CustomButton color="primary" onClick={onSendPackData}>
        Get pack Data
      </CustomButton>
    </>
  )
}
