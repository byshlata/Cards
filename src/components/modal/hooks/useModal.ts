import { useState } from 'react'

type useModalType = {
  isOpen: boolean
  setOpen: () => void
  setClose: () => void
}

export function useModal(): useModalType {
  const [isOpen, setIsOpen] = useState(false)
  const setClose = (): void => {
    setIsOpen(false)
  }

  const setOpen = (): void => {
    setIsOpen(true)
  }
  return { isOpen, setOpen, setClose }
}
