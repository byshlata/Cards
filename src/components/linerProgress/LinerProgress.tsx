import React, { ReactElement } from 'react'

import { LinerProgressType } from 'components/linerProgress/types/LinerProgressType'

import style from './LinerProgress.module.sass'

export const LinerProgress = ({ isLoading }: LinerProgressType): ReactElement =>
  isLoading ? (
    <div className={style.linear}>
      <div className={style.indeterminate} />
    </div>
  ) : (
    <div />
  )
