import { isNull } from 'util'

import React, { ReactNode, useEffect, useRef, useState } from 'react'

import style from './Menu.module.sass'

type MenuType = {
  headMenu: ReactNode
  children?: ReactNode[]
}

export const Menu = ({ headMenu, children }: MenuType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const onOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const onCloseOutside = (event: any) => {
    if (ref.current) {
      if (!ref.current.contains(event.target)) {
        setIsOpen(false)
      } else {
        return
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onCloseOutside)
  }, [])

  const isOpenMenu = children?.length && isOpen

  return (
    <div className={style.menu} onClick={onOpenMenu} ref={ref}>
      {headMenu}
      {isOpenMenu && (
        <div className={style.menuContainer} onClick={onOpenMenu}>
          <div className={style.angle}></div>
          <div className={style.helpBlock}>
            {children.map((element, index) => (
              <div key={index} className={style.menuItem}>
                {element}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
