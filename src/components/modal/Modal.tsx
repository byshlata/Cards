import React, { ReactElement, ReactNode } from 'react'

import { CustomButton } from 'components/button'

import s from './Modal.module.sass'

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

  const classModal = isOpen ? s.modalOpen : s.modalClose
  const classContent = isOpen ? s.contentOpen : s.contentClose

  return (
    <div className={classModal}>
      <div className={classContent}>
        <div className={s.buttonClose}>
          <CustomButton type="link" disabled={false} onClick={onClose}>
            <div className={s.close} />
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  )
}
