import React from 'react'

import style from './Title.module.sass'

type TitleType = {
  text: string
}

export const Title = React.memo(({ text }: TitleType) => {
  return <h2 className={style.title}>{text}</h2>
})
