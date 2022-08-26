import React, { ReactElement } from 'react'

import style from './Loader.module.sass'

export const Loader = (): ReactElement => (
  <div className={style.container}>
    <div className={style.loader} />
  </div>
)
