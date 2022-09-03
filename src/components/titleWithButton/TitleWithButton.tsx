import React, { ReactElement } from 'react'

import { CustomButton, Modal, Title } from 'components'

import { AddPackModal } from '../modal/addPack-modal/AddPack-modal'
import { useModal } from '../modal/hooks/useModal'

import style from './TitleWithButton.module.sass'

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
