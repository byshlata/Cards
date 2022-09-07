import React, { useRef } from 'react'

import style from './ButtonUpload.module.sass'

import { IconUploadSvg, CustomButtonBox } from 'components'

export const ButtonUpload = () => {
  const inRef = useRef<HTMLInputElement>(null)

  const upload = () => {}

  const onOpenWindowUpload = () => {
    inRef && inRef.current && inRef.current.click()
  }

  return (
    <div className={style.buttonWrapper}>
      <input ref={inRef} type={'file'} className={style.input} onChange={upload} />
      <CustomButtonBox color={'link'} onClick={onOpenWindowUpload}>
        <IconUploadSvg />
      </CustomButtonBox>
    </div>
  )
}
