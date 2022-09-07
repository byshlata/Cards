import React, { ReactElement } from 'react'

import style from './LinerProgress.module.sass'

import { LinerProgressType } from 'components/linerProgress/types/LinerProgressType'

export const LinerProgress = ({ isLoading }: LinerProgressType): ReactElement =>
  isLoading ? (
    <div className={style.linear}>
      <div className={style.indeterminate} />
    </div>
  ) : (
    <div />
  )
