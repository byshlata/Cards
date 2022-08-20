import React from 'react'

import style from '../../styles/container.module.sass'

import s from './Header.module.sass'

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={style.container}></div>
      </header>
    </>
  )
}
