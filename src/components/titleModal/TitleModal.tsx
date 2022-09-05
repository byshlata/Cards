import React from 'react'

import style from './TitleModal.module.sass'

type TitleModalType = {
  text: string
}

export const TitleModal = React.memo(({ text }: TitleModalType) => {
  return <h2 className={style.titleModal}>{text}</h2>
})
