import React, { useEffect, useState } from 'react'

import { CustomButton, Header, LinerProgress } from 'components'
import { CustomButtonBox } from 'components/button/customButton/CustomButtonBox'
import { ButtonChoiceGrope } from 'components/buttonChoiceGroupe/ButtonChoiceGrope'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { CustomSlider } from 'components/customSlider/CustomSlider'
import { Loader } from 'components/loader/Loader'
import { Search } from 'components/search/Search'
import { useAppDispatch } from 'hooks'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import {
  fetchProfilePage,
  selectorError,
  selectorIsAuth,
  selectorIsLoading,
  selectorsIsInitialized,
  selectorUserId,
  selectorsIsInitialized,
} from 'store'
import { getPackData } from 'store/thunk/pakcThunk'
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
      <Search />
      <ButtonChoiceGrope />
      <CustomSlider />
    </>
  )
}
