import React, { DetailedHTMLProps, MouseEvent, ReactElement, ReactNode } from 'react'

import { CustomButton } from 'components/button'

import { useAppDispatch } from '../../hooks'

import style from './Modal.module.sass'

type ModalType = {
  isOpen: boolean
  children?: ReactNode
}

export const ModalToolkit: React.FC<ModalType> = (props): ReactElement | null => {
  const { isOpen, children } = props

  const dispatch = useAppDispatch()

  const classModal = isOpen ? style.modalOpen : style.modalClose
  const classContent = isOpen ? style.contentOpen : style.contentClose

  const onStopPropagation = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const modalCloseHandler = () => {
    // dispatch(openCloseAddNewPackModal(false))
  }
  return (
    <div className={classModal}>
      <div className={classContent} onClick={onStopPropagation}>
        <div className={style.buttonClose}>
          <CustomButton color="link" disabled={false}>
            <div className={style.close} onClick={modalCloseHandler} />
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  )
}
