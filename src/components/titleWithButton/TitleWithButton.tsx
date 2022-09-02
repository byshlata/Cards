import React, { ReactElement } from 'react'

import { CustomButton, Title } from 'components'

import style from './TitleWithButton.module.sass'

type TitleWithButtonType = {
  titleText: string
  children?: ReactElement
  buttonText: string
  onClick: () => void
}

export const TitleWithButton = ({
  buttonText,
  titleText,
  children,
  onClick,
}: TitleWithButtonType) => {
  return (
    <div className={style.titleWithButtonWrapper}>
      <div className={style.titleMenuWrapper}>
        <Title text={titleText} />
        {children}
      </div>
      <div className={style.buttonWrapper}>
        <CustomButton color="primary" onClick={onClick}>
          {buttonText}
        </CustomButton>
      </div>
    </div>
  )
}
