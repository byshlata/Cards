import React, { useEffect, useRef, useState } from 'react'

import style from './PackMenu.module.sass'
import { PackMenuWithOptions } from './PackMenuWithOptions'

export const PackMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const menuOpener = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    const menuCloser = (e: any) => {
      if (e.path[0] !== ref.current) setIsOpen(false)
    }

    document.body.addEventListener('click', menuCloser)

    return () => document.body.removeEventListener('click', menuCloser)
  }, [])

  return (
    <div className={style.packMenuWrapper} onClick={menuOpener} ref={ref}>
      .{isOpen ? <PackMenuWithOptions /> : null}
    </div>
  )
}
