import { useState } from 'react'

type useModalType = {
  isOpenModal: boolean
  onOpenModal: () => void
  onCloseModal: () => void
}

export function useModal(): useModalType {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const onCloseModal = (): void => {
    setIsOpenModal(false)
  }

  const onOpenModal = (): void => {
    setIsOpenModal(true)
  }

  return { isOpenModal, onOpenModal, onCloseModal }
}
