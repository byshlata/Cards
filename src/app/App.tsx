import React from 'react'

import { Header, LinerProgress } from 'components'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import { selectorsIsLoading } from 'store'
import styleMain from 'styles/container.module.sass'

import style from './App.module.sass'

export const App = () => {
  const isLoading = useSelector(selectorsIsLoading)
  return (
    <>
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
