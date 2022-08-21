import React from 'react'

import style from './CustomInput.module.sass'

export const CustomInput = () => {
  return (
    <div className={style.centered}>
      <div className={style.group}>
        <input type="text" className={style.superInput} id="domId" required />
        <label htmlFor="domId" className={style.superLabel}>
          Name
        </label>
        <div className={style.bar} />
      </div>
    </div>
  )
}
