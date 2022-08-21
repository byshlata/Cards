import React from 'react'

import { Header, LinerProgress } from 'components'
import { useSelector } from 'react-redux'
import { selectorsIsLoading } from 'store'

import { Profile } from '../pages/profile/Profile'

import s from './App.module.sass'

export const App = () => {
  const isLoading = useSelector(selectorsIsLoading)
  const as = 100
  return (
    <>
      <Header />
      <div className={s.linerProgressWrapper}>
        <LinerProgress isLoading={isLoading} />
      </div>
      <Profile />
    </>
  )
}
