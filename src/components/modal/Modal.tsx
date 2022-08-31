import React, { DetailedHTMLProps, MouseEvent, ReactElement, ReactNode } from 'react'

import style from './Modal.module.sass'

import { CustomButton } from 'components/button'

type ModalType = {
  onClose: () => void
  isOpen: boolean
  children?: ReactNode
}

export const Modal: React.FC<ModalType> = (props): ReactElement | null => {
  const { onClose, isOpen, children } = props

  const classModal = isOpen ? style.modalOpen : style.modalClose
  const classContent = isOpen ? style.contentOpen : style.contentClose

  const onStopP = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={classModal} onClick={onClose}>
      <div className={classContent} onClick={onStopP}>
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
