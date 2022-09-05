import React from 'react'

import style from './PackMenuWithOptions.module.sass'

import { editIcon, learnIcon, removeIcon } from './index'

export const PackMenuWithOptions = () => {
  const onEdit = () => {}
  const onRemove = () => {}
  const onLearn = () => {}

  return (
    <div className={style.packMenuOpen}>
      <div className={style.menuItem} onClick={onEdit}>
        <img src={editIcon} alt={'edit pack'} />
        <div>Edit</div>
      </div>
      <div className={style.menuItem} onClick={onRemove}>
        <img src={removeIcon} alt={'remove pack'} />
        <div>Delete</div>
      </div>
      <div className={style.menuItem} onClick={onLearn}>
        <img src={learnIcon} alt={'learn pack'} />
        <div>Learn</div>
      </div>
    </div>
  )
}
