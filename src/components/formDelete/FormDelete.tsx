import React from 'react'

import { CustomButton } from 'components/button'
import { TitleModal } from 'components/titleModal/TitleModal'

import style from './FormDelete.module.sass'

type FormDeleteType = {
  packOrCard: 'pack' | 'card'
  title: string
  nameDeleteValue: string
  onClickDeleteButton: () => void
  onClickCancelButton: () => void
}

export const FormDelete = ({
  nameDeleteValue,
  onClickCancelButton,
  onClickDeleteButton,
  title,
  packOrCard,
}: FormDeleteType) => {
  return (
    <div className={style.formWrapper}>
      <div className={style.titleWrapper}>
        <TitleModal text={title} />
      </div>
      <div className={style.text}>
        <p>
          Do you really want to remove <b>{nameDeleteValue}</b>?
        </p>
        <br />
        {packOrCard === 'pack' && <p> All cards will be deleted.</p>}
      </div>

      <div className={style.buttonWrapper}>
        <div className={style.buttonCancelItem}>
          <CustomButton color="link" onClick={onClickCancelButton}>
            Cancel
          </CustomButton>
        </div>
        <div className={style.buttonSaveItem}>
          <CustomButton color="danger" onClick={onClickDeleteButton}>
            Delete
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
