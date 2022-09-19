import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { initialStatePackParams } from 'store'
import { CardParamsInitialType, PackParamsInitialType, UsersParamsInitialType } from 'types'
import { isEmptyObject, translateObjKeyToString } from 'utils'

export type URLParamsType<T, K, D, H> = T extends K ? K : T extends D ? D : H

export type URLSearchParamsType<T> = {
  [Key in keyof T]: string
}

export const useCustomSearchParams = <T>(
  initialURLParams: URLParamsType<
    T,
    PackParamsInitialType,
    CardParamsInitialType,
    UsersParamsInitialType
  >
) => {
  const [searchParams, setSearchParams] = useSearchParams()

  type URLSearchUseType = URLSearchParamsType<
    URLParamsType<T, PackParamsInitialType, CardParamsInitialType, UsersParamsInitialType>
  >

  type URLParamsUseType = URLParamsType<
    T,
    PackParamsInitialType,
    CardParamsInitialType,
    UsersParamsInitialType
  >

  const paramsInitFromURL = Object.fromEntries(searchParams.entries()) as Partial<URLSearchUseType>

  const initStateParams = isEmptyObject(paramsInitFromURL)
    ? initialURLParams
    : getInitialParams(paramsInitFromURL, initialURLParams)

  const [paramsURL, setParams] = useState<URLParamsUseType>(initStateParams)

  useEffect(() => {
    const paramsURl = getInitialParams(paramsInitFromURL, initialURLParams)

    setParams(paramsURl)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(paramsURl)))
  }, [searchParams])

  const setURLParams = (value: Partial<URLParamsUseType>) => {
    const paramsURl = getInitialParams({ ...paramsInitFromURL, ...value }, initialURLParams)
    setParams(paramsURl)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(paramsURl)))
  }

  const resetURLParams = () => {
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
