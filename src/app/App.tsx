import React, { useState } from 'react'

import { Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { Profile, Routers } from 'pages'
import { useSelector } from 'react-redux'
import { selectorError, selectorIsLoading } from 'store'
import styleMain from 'styles/container.module.sass'

import style from './App.module.sass'

export const App = () => {
  const isLoading = useSelector(selectorIsLoading)
  const errorMessage = useSelector(selectorError)
  console.log('app')
  console.log('app', errorMessage)

  return (
    <>
      {errorMessage !== '' ? <CustomAlert severity="error" message={errorMessage} /> : null}

      <Header />
      <div className={style.linerProgressWrapper}>
        <LinerProgress isLoading={isLoading} />
      </div>
      <div className={styleMain.container}>
        <Routers />
        <Profile />
      </div>
    </>
  )
}
