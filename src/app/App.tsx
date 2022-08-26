import React, { useEffect } from 'react'

import { Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import { selectorError, selectorIsLoading } from 'store'
import styleMain from 'styles/container.module.sass'

import { useAppDispatch } from '../hooks'
import { fetchProfilePage } from '../store/thunk/profileThunk'

import style from './App.module.sass'

export const App = () => {
  const isLoading = useSelector(selectorIsLoading)
  const errorMessage = useSelector(selectorError)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProfilePage())
  }, [])

  // eslint-disable-next-line no-debugger
  debugger
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
