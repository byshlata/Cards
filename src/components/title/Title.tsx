import React from 'react'

import style from '../../styles/style-title.module.sass'

type TitleType = {
  text: string
}

export const Title = ({ text }: TitleType) => {
  return (
    <>
      <h2 className={style.title}>{text}</h2>
    </>
  )
}
