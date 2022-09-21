import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { CardParamsType, PackParamsType, UsersParamsType } from 'types'
import { isEmptyObject, translateObjKeyToString } from 'utils'

export type URLParamsType<T, K, D, H> = T extends K ? K : T extends D ? D : H

export type URLSearchParamsType<T> = {
  [Key in keyof T]: string
}

export const useCustomSearchParams = <T>(
  initialURLParams: URLParamsType<T, PackParamsType, CardParamsType, UsersParamsType>
) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [notSearchUTLParams, setNotSearchUTLParams] = useState<boolean>(false)

  type URLSearchUseType = URLSearchParamsType<
    URLParamsType<T, PackParamsType, CardParamsType, UsersParamsType>
  >

  type URLParamsUseType = URLParamsType<T, PackParamsType, CardParamsType, UsersParamsType>

  const paramsInitFromURL = Object.fromEntries(searchParams.entries()) as Partial<URLSearchUseType>

  const initStateParams = isEmptyObject(paramsInitFromURL)
    ? initialURLParams
    : getInitialParams(paramsInitFromURL, initialURLParams)

  const [paramsURL, setParams] = useState<URLParamsUseType>(initStateParams)

  useEffect(() => {
    const paramsURl = getInitialParams(paramsInitFromURL, initialURLParams)

    setParams(paramsURl)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(paramsURl)))
  }, [searchParams, notSearchUTLParams])

  const setURLParams = (value: Partial<URLParamsUseType>) => {
    const paramsURl = getInitialParams({ ...paramsInitFromURL, ...value }, initialURLParams)
    setParams(paramsURl)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(paramsURl)))
  }

  const resetURLParams = () => {
    setNotSearchUTLParams(false)
    setParams(initialURLParams)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(initialURLParams)))
  }

  return { searchParams, paramsURL, setURLParams, resetURLParams }
}

export const getInitialParams = <T>(
  paramsFromURL: Partial<URLSearchParamsType<T>>,
  initialURLParams: T
) => {
  let paramsFromURLOff = { ...paramsFromURL }
  let initialURLParamsOff = { ...initialURLParams }
  for (let key in initialURLParamsOff) {
    if (paramsFromURLOff[key]) {
      if (typeof initialURLParamsOff[key] === 'number') {
        // @ts-ignore
        initialURLParamsOff[key] = +paramsFromURLOff[key]
      } else {
        // @ts-ignore
        initialURLParamsOff[key] = paramsFromURLOff[key]
      }
    }
  }
  return initialURLParamsOff
}

export const setCustomSearchParams = (obj: any) => {
  let objOff: any = {}
  for (let key in obj) {
    if (obj[key] !== '') {
      objOff[key] = obj[key]
    }
  }
  return objOff
}
