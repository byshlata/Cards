import React, { ReactElement } from 'react'

import s from './Input.module.sass'

export const Input = (): ReactElement => (
  <div className={s.centered}>
    <div className={s.group}>
      <input type="text" className={s.superInput} id="domId" required />
      <label htmlFor="domId" className={s.superLabel}>
        Name
      </label>
      <div className={s.bar} />
    </div>
  </div>
)
