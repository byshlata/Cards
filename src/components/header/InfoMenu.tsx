import React, { ReactNode } from 'react'

import style from './UserInfo.module.sass'

type InfoMenuType = {
  children?: ReactNode[]
}

export const InfoMenu = ({ children }: InfoMenuType) => {
  return (
    <div className={style.menuContainer}>
      <div className={style.angle}></div>
      <div className={style.helpBlock}>
        {children &&
          children.map((element, index) => (
            <div key={index} className={style.menuItem}>
              {element}
            </div>
          ))}
      </div>
    </div>
  )
}
