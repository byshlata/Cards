import React from 'react'

import { Header, LinerProgress } from 'components'
import { Forgot } from 'pages'
import { useSelector } from 'react-redux'
import { selectorsIsLoading } from 'store'
import style from 'styles/container.module.sass'

import s from './App.module.sass'

export const App = () => {
  const isLoading = useSelector(selectorsIsLoading)
  return (
    <>
      <Header />
      <div className={s.linerProgressWrapper}>
        <LinerProgress isLoading={isLoading} />
      </div>
      <div className={style.container}>
        <Forgot />
      </div>
    </>
  )
}
