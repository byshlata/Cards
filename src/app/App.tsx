import React, { useState } from 'react'

import { Header, LinerProgress } from 'components'
import { CustomAlert } from 'components/customAlert/CustomAlert'
import { Routers } from 'pages'
import { useSelector } from 'react-redux'
import { selectorIsLoading } from 'store'
import styleMain from 'styles/container.module.sass'

import style from './App.module.sass'

export const App = () => {
  const isLoading = useSelector(selectorIsLoading)

  const [number, setNumber] = useState<string>('0')

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  setInterval(() => {
    setNumber(number + '1')
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  }, 3000)

  return (
    <>
      <CustomAlert severity="error" textMessage={number} />
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
