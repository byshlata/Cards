import React from 'react'

import styleMain from '../../styles/container.module.sass'

import style from './Header.module.sass'

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={styleMain.container}></div>
      </header>
    </>
  )
}
