import React, { ChangeEvent, useRef, useState } from 'react'

import { IconUploadSvg, CustomButtonBox } from 'components'
import { useAppDispatch } from 'hooks'
import { changeProfileName } from 'store'

import style from './ButtonUpload.module.sass'

export const ButtonUpload = () => {
  const dispatch = useAppDispatch()
  const [file64, setFile64] = useState()

  const inRef = useRef<HTMLInputElement>(null)

  const upload = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      // @ts-ignore
      setFile64(reader.result)
    }

    if (newFile) {
      reader.readAsText(newFile)
      // @ts-ignore
      dispatch(changeProfileName({ avatar: file64 }))
    }
  }

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
