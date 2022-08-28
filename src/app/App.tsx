import React, { useEffect } from 'react'

import { Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { Login, Profile, Routers } from 'pages'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  fetchProfilePage,
  selectorError,
  selectorIsAuth,
  selectorIsLoading,
  selectorUserId,
} from 'store'
import styleMain from 'styles/container.module.sass'

import { Search } from '../components/search/Search'
import { Path } from '../enums'
import { useAppDispatch } from '../hooks'

import style from './App.module.sass'

export const App = () => {
  const navigate = useNavigate()
  const isLoading = useSelector(selectorIsLoading)
  const errorMessage = useSelector(selectorError)
  const isAuth = useSelector(selectorIsAuth)
  const userId = useSelector(selectorUserId)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProfilePage())
  }, [])

  useEffect(() => {
    if (isAuth) {
      navigate(`${Path.Profile}`)
    }
  }, [isAuth])

  return (
    <>
      <CustomAlert severity="error" message={errorMessage} />
      <Header />
      <div className={style.linerProgressWrapper}>
        <LinerProgress isLoading={isLoading} />
      </div>
      <div className={styleMain.container}>
        <Routers />
        {/*<Search />*/}
      </div>
    </>
  )
}
