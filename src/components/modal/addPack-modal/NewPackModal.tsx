import React, { ChangeEvent, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { editPackThank, getInputName, getModalDataId, getModalId } from 'store'
import { closeModal } from 'store/slice/modalSlice'

import { useAppDispatch } from '../../../hooks'
import { addNewPackThank } from '../../../store/thunk/addNewPakcThunk'
import { CustomButton } from '../../button'
import { CustomInput } from '../../input'
import { ModalToolkit } from '../ModalToolkit'

import style from './Add-Modal.module.sass'

export const NewPackModal = () => {
  const modalId = 'NewPackModal'
  const dispatch = useAppDispatch()
  const isOpenModal = useSelector(getModalId)
  const modalDataId = useSelector(getModalDataId)
  const namePack = useSelector(getInputName)
  const isOpen = isOpenModal === modalId

  const [value, setValue] = useState<string>('')
  const [checked, isChecked] = useState(false)

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const isCloseButton = () => {
    dispatch(closeModal())
    setValue('')
  }
  const saveButtonHandler = () => {
    if (!modalDataId) {
      dispatch(addNewPackThank({ name: value }))
    } else {
      dispatch(editPackThank({ _id: modalDataId, name: value }))
    }
  }

  useEffect(() => {
    setValue(namePack)
  }, [namePack, isOpen])

  return (
    <ModalToolkit isOpen={isOpen}>
      <div className={style.container}>
        <div className={style.wrapperTitle}>
          <div className={style.title}>{modalDataId ? 'edit pack' : 'add pack'}</div>
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
