import React from 'react'

import { CustomButton } from 'components/button'
import style from 'pages/emptyPack/emptyPack.module.sass'

export const EmptyPack = () => {
  return (
    <>
      <div className={style.emptyPackWrapper}>
        <p className={style.text}>This pack is empty. Click add new card to fill this pack</p>
        <div className={style.buttonWrapper}>
          <CustomButton color="primary"> Add new card </CustomButton>
        </div>
      </div>
    </>
  )
}
