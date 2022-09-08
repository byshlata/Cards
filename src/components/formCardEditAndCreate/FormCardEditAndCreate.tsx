import React, { useEffect, useState } from 'react'

import { Select } from 'antd'
import { CustomButton, CustomInput, TitleModal } from 'components'
import { useCustomInput } from 'components/input/customInput/hooks'

import style from './FormCardEditAndCreate.module.sass'

type FormCardEditAndCreateType = {
  title: string
  valueQuestionInput: string
  valueAnswerInput: string
  labelSelector: string
  labelQuestionInput: string
  labelAnswerInput: string
  onClickSaveButton: (valueQuestionInput: string, valueAnswerInput: string) => void
  onClickCancelButton: () => void
  isOpenModal: boolean
}

const { Option } = Select

export const FormCardEditAndCreate = ({
  valueQuestionInput,
  valueAnswerInput,
  labelQuestionInput,
  labelAnswerInput,
  labelSelector,
  onClickCancelButton,
  onClickSaveButton,
  title,
  isOpenModal,
}: FormCardEditAndCreateType) => {
  const [valueQuestion, onChangeQuestion, resetInputQuestion] = useCustomInput(valueQuestionInput)
  const [valueAnswer, onChangeAnswer, resetInputAnswer] = useCustomInput(valueAnswerInput)

  const [valueSelector, setValueSelector] = useState('')

  useEffect(() => {
    if (!valueQuestion && !valueAnswer) {
      resetInputQuestion()
      resetInputAnswer()
    }
  }, [isOpenModal])

  const onClickSave = () => {
    onClickSaveButton(valueQuestion, valueAnswer)
  }

  const onClickCancel = () => {
    onClickCancelButton()
  }

  const onChangeSelector = (value: string) => {
    setValueSelector(value)
    console.log(value)
  }

  return (
    <div className={style.formWrapper}>
      <div className={style.titleWrapper}>
        <TitleModal text={title} />
      </div>
      <Select defaultValue="text" style={{ width: '100%' }} onChange={onChangeSelector}>
        <Option value="text">Text</Option>
        <Option value="image">Image</Option>
      </Select>
      <CustomInput
        type="simple"
        value={valueQuestionInput}
        onChange={onChangeQuestion}
        name={labelQuestionInput}
      />
      <CustomInput
        type="simple"
        value={valueAnswerInput}
        onChange={onChangeAnswer}
        name={labelAnswerInput}
      />

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
