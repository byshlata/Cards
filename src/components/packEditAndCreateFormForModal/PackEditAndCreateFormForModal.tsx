import React, { useEffect } from 'react'

import { TitleModal, CustomCheckBox, CustomButton, CustomInput } from 'components'
import { useCustomCheckBox } from 'components/customCheckBox/hooks/useChecked'
import { useCustomInput } from 'components/input/customInput/hooks'

import style from './PackEditAndCreateFormForModal.module.sass'

type PackEditAndCreateFormForModalType = {
  title: string
  valueInput: string
  valueCheckBox: boolean
  labelInput: string
  labelCheckBox: string
  onClickSaveButton: (valueInput: string, valueCheckBox: boolean) => void
  onClickCancelButton: () => void
  isOpenModal: boolean
}

export const PackEditAndCreateFormForModal = ({
  labelCheckBox,
  valueCheckBox,
  labelInput,
  valueInput,
  onClickCancelButton,
  onClickSaveButton,
  title,
  isOpenModal,
}: PackEditAndCreateFormForModalType) => {
  const { checkedBox, setCheckedBox } = useCustomCheckBox(valueCheckBox)
  const { value, onChange, resetInput } = useCustomInput(valueInput)

  useEffect(() => {
    if (!valueInput) {
      resetInput()
    }
  }, [isOpenModal])

  const onClickSave = () => {
    onClickSaveButton(value, checkedBox)
  }

  const onClickCancel = () => {
    setCheckedBox(false)
    onClickCancelButton()
  }

  return (
    <div className={style.formWrapper}>
      <div className={style.titleWrapper}>
        <TitleModal text={title} />
      </div>
      <hr className={style.hr} />
      <CustomInput type="simple" value={value} onChange={onChange} name={labelInput} />
      <div className={style.checkBoxWrapper}>
        <CustomCheckBox checked={checkedBox} onChange={setCheckedBox} label={labelCheckBox} />
      </div>
      <div className={style.buttonWrapper}>
        <div className={style.buttonCancelItem}>
          <CustomButton color="link" onClick={onClickCancel}>
            Cancel
          </CustomButton>
        </div>
        <div className={style.buttonSaveItem}>
          <CustomButton color="primary" onClick={onClickSave}>
            Save
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
