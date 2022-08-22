import style from '../CustomInput.module.sass'

export const useClassInputElement = (error = false, disable = false) => {
  const classInput =
    (disable && error) || disable
      ? style.customInputDisable
      : error
      ? style.customInputError
      : style.customInput

  const classLabel =
    (disable && error) || disable
      ? style.customLabelDisable
      : error
      ? style.customLabelError
      : style.customLabel

  const classBar =
    (disable && error) || disable ? style.barDisable : error ? style.barError : style.bar

  const classSearchIcon =
    (disable && error) || disable ? style.iconButtonDisable : style.iconButtonSearch

  const classIcon = (disable && error) || disable ? style.iconButtonDisable : style.iconButton
  return { classInput, classLabel, classBar, classIcon, classSearchIcon }
}
