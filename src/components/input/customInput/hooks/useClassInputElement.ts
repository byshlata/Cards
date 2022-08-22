import style from '../CustomInput.module.sass'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const UseClassInputElement = (error = false, disable = false) => {
  // eslint-disable-next-line no-nested-ternary
  const classInput =
    // eslint-disable-next-line no-nested-ternary
    (disable && error) || disable
      ? style.customInputDisable
      : error
      ? style.customInputError
      : style.customInput
  // eslint-disable-next-line no-nested-ternary
  const classLabel =
    // eslint-disable-next-line no-nested-ternary
    (disable && error) || disable
      ? style.customLabelDisable
      : error
      ? style.customLabelError
      : style.customLabel
  // eslint-disable-next-line no-nested-ternary
  const classBar =
    // eslint-disable-next-line no-nested-ternary
    (disable && error) || disable ? style.barDisable : error ? style.barError : style.bar

  const classSearchIcon =
    (disable && error) || disable ? style.iconButtonDisable : style.iconButtonSearch

  const classIcon = (disable && error) || disable ? style.iconButtonDisable : style.iconButton
  return { classInput, classLabel, classBar, classIcon, classSearchIcon }
}
