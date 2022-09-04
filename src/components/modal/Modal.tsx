import React, { ReactElement, ReactNode, useEffect, useRef } from 'react'

import { CustomButton } from 'components/button'
import { useModalClass } from 'components/modal/hooks/useModalClass'

import style from './Modal.module.sass'

type ModalType = {
  onClose: () => void
  isOpen: boolean
  children?: ReactNode
}

export const Modal: React.FC<ModalType> = (props): ReactElement | null => {
  const { onClose, isOpen, children } = props

  const { classModal, classContent } = useModalClass(isOpen)
  const ref = useRef<HTMLDivElement>(null)

  const onCloseOutside = (event: any) => {
    if (ref.current) {
      if (!ref.current.contains(event.target)) {
        onClose()
      } else {
        return
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onCloseOutside)
    document.addEventListener('keydown', onCloseOutside)
    return () => {
      document.addEventListener('mousedown', onCloseOutside)
      document.addEventListener('keydown', onCloseOutside)
    }
  }, [])

  return (
    <div className={classModal} onClick={onClose} ref={ref}>
      <div className={classContent}>
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
