import React, { ChangeEvent, useState } from 'react'

import { useSelector } from 'react-redux'
import { openCloseAddNewPackModal, addNewPackModal } from 'store'

import { useAppDispatch } from '../../../hooks'
import { CustomButton } from '../../button'
import { CustomInput } from '../../input'
import { ModalToolkit } from '../ModalToolkit'

import style from './Add-Modal.module.sass'

type AddPackModalType = {
  name: string
}

export const AddPackModal = (props: AddPackModalType) => {
  const isOpenModal = useSelector(addNewPackModal)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState('')
  const [checked, isChecked] = useState(false)

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const isCloseButton = () => {
    dispatch(openCloseAddNewPackModal(false))
    setValue('')
  }
  const saveButtonHandler = () => {}

  return (
    <ModalToolkit isOpen={isOpenModal}>
      <div className={style.container}>
        <div className={style.wrapperTitle}>
          <div className={style.title}>{props.name}</div>
          <div className={style.closeButton}>
            <a href="#" className={style.close} />
          </div>
        </div>
        <div className={style.hr}></div>
        <div className={style.input}>
          <CustomInput
            className={'pt1'}
            onChange={onchangeHandler}
            type={'simple'}
            name={'Name pack'}
            value={value}
          />
        </div>
        <div className={style.inputCheckbox}>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={checked}
            onClick={() => isChecked(!checked)}
          />
          <label htmlFor="checkbox">Private pack</label>
        </div>
        <div className={style.customButton}>
          <div className={style.customButtonCancel}>
            <CustomButton type={'submit'} color={'link'} onClick={isCloseButton}>
              {'Close'}
            </CustomButton>
          </div>
          <div className={style.customButtonSave}>
            <CustomButton type={'submit'} color={'submit'} onClick={saveButtonHandler}>
              {'Save'}
            </CustomButton>
          </div>
        </div>
      </div>
    </ModalToolkit>
  )
}
