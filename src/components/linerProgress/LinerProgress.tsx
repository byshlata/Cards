import React, { ReactElement } from 'react'

import s from './LinerProgress.module.sass'
import { LinerProgressType } from './LinerProgressType'

export const LinerProgress = ({ isLoading }: LinerProgressType): ReactElement =>
  isLoading ? (
    <div className={s.linear}>
      <div className={s.indeterminate} />
    </div>
  ) : (
    <div />
  )
