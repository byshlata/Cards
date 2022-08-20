import React from 'react'

import s from './Header.module.sass'

import style from '../../styles/container.module.sass'

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={style.container}></div>
      </header>
    </>
  )
}
