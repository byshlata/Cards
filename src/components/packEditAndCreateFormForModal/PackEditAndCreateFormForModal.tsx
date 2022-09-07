import React, { useEffect } from 'react'

import { TitleModal, CustomCheckBox, CustomButton, CustomInput } from 'components'
import { useCustomCheckBox } from 'components/customCheckBox/hooks/useChecked'
import { useCustomInput } from 'components/input/customInput/hooks'

import style from './PackEditAndCreateFormForModal.module.sass'
import { createErrorSchema } from 'utils'

import * as yup from 'yup'
import { useFormik } from 'formik'

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

const schema = yup.object().shape(createErrorSchema(['simple']))

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
      setCheckedBox(false)
      resetInput()
    }
  }, [isOpenModal])

  const onClickCancel = () => {
    onClickCancelButton()
  }

  const formik = useFormik({
    initialValues: {
      value: '',
      private: false
    },
    validationSchema: schema,
    onSubmit: (values, private) => {
      onClickSaveButton(value, checkedBox)
    },
  })


  return (
    <form className={style.formWrapper}>
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
          <CustomButton color="primary" type="submit" onClick={formik.handleSubmit}>
            Save
          </CustomButton>
        </div>
      </div>
    </form>
  )
}
