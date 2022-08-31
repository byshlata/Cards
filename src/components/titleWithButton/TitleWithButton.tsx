import React, { ReactElement } from 'react'

import style from './TitleWithButton.module.sass'

import { CustomButton, Title } from 'components'

type TitleWithButtonType = {
  titleText: string
  element?: ReactElement
  buttonText: string
  onClick: () => void
}

export const TitleWithButton = ({
  buttonText,
  titleText,
  element,
  onClick,
}: TitleWithButtonType) => {
  return (
    <div className={style.titleWithButtonWrapper}>
      <div>
        <Title text={titleText} />
        {element}
      </div>
      <div className={style.buttonWrapper}>
        <CustomButton color="primary" onClick={onClick}>
          {buttonText}
        </CustomButton>
      </div>
    </div>
  )
}
