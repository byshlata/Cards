import React, { ReactElement, ReactNode } from 'react'

import { CustomButton } from 'components/button'

import style from './Modal.module.sass'

type ModalType = {
  isClose: () => void
  isOpen: boolean
  children: ReactNode
}

export const Modal: React.FC<ModalType> = (props): ReactElement | null => {
  const { isClose, isOpen, children } = props

  const onClose = (): void => {
    isClose()
  }

  const classModal = isOpen ? style.modalOpen : style.modalClose
  const classContent = isOpen ? style.contentOpen : style.contentClose

  return (
    <div className={classModal}>
      <div className={classContent}>
        <div className={style.buttonClose}>
          <CustomButton type="link" disabled={false} onClick={onClose}>
            <div className={style.close} />
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  )
}
