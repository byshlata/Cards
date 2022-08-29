import React, { useEffect } from 'react'

import { Header, LinerProgress } from 'components'
import { ButtonChoiceGrope } from 'components/buttonChoiceGroupe/ButtonChoiceGrope'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { CustomSlider } from 'components/customSlider/CustomSlider'
import { Loader } from 'components/loader/Loader'
import { Search } from 'components/search/Search'
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
