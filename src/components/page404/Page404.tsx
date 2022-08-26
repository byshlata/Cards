import React, { ReactElement } from 'react'

import style from './Page404.module.sass'

export const Page404 = (): ReactElement => {
  const text = "Oops. The page you're looking for doesn't exist."

  return (
    <div className={style.center}>
      <div className={style.error}>
        <div className={style.number}>4</div>
        <div className={style.illustration}>
          <div className={style.circle} />
          <div className={style.clip}>
            <div className={style.paper}>
              <div className={style.face}>
                <div className={style.eyes}>
                  <div className={`${style.eye} ${style.eyeLeft}`} />
                  <div className={`${style.eye} ${style.eyeRight}`} />
                </div>
                <div className={`${style.rosyCheeks} ${style.rosyCheeksLeft}`} />
                <div className={`${style.rosyCheeks} ${style.rosyCheeksRight}`} />
                <div className={style.mouth} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.number}>4</div>
      </div>
      <div className={style.text}>{text}</div>
    </div>
  )
}
