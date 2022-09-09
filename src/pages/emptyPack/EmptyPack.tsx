import React from 'react'

import { CustomButton } from 'components/button'
import style from 'pages/emptyPack/emptyPack.module.sass'

type EmptyPackType = {
  onClickAddCard: () => void
}

export const EmptyPack = ({ onClickAddCard }: EmptyPackType) => {
  return (
    <>
      <div className={style.emptyPackWrapper}>
        <p className={style.text}>This pack is empty. Click add new card to fill this pack</p>
        <div className={style.buttonWrapper}>
          <CustomButton color="primary" onClick={onClickAddCard}>
            Add new card
          </CustomButton>
        </div>
      </div>
    </>
  )
}
