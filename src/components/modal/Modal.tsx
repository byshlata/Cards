import React, { MouseEvent, ReactElement, ReactNode } from 'react'

import { CustomButton } from 'components/button'

import style from './Modal.module.sass'

type ModalType = {
  onClose: () => void
  isOpen: boolean
  children?: ReactNode
}

export const Modal: React.FC<ModalType> = (props): ReactElement | null => {
  const { onClose, isOpen, children } = props

  const classModal = isOpen ? style.modalOpen : style.modalClose
  const classContent = isOpen ? style.contentOpen : style.contentClose

  const onStopPropagation = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={classModal} onClick={onClose}>
      <div className={classContent} onClick={onStopPropagation}>
        <div className={style.buttonClose}>
          <CustomButton color="link" disabled={false} onClick={onClose}>
            <div className={style.close} />
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  )
}
