import { useEffect, useLayoutEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { CardParamsInitialType, PackParamsInitialType } from 'types'
import { translateObjKeyToString } from 'utils'

export type URLParamsType<T, K, D> = T extends K ? K : D

export type URLSearchParamsType<T> = {
  [Key in keyof T]: string
}

export const useCustomSearchParams = <T>(
  initialURLParams: URLParamsType<T, PackParamsInitialType, CardParamsInitialType>
) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [params, setParams] =
    useState<URLParamsType<T, PackParamsInitialType, CardParamsInitialType>>(initialURLParams)

  useEffect(() => {
    const paramsInitFromURL = Object.fromEntries(searchParams.entries()) as Partial<
      URLSearchParamsType<URLParamsType<T, PackParamsInitialType, CardParamsInitialType>>
    >
    // eslint-disable-next-line no-debugger
    debugger
    console.log('zxczxczxczx', paramsInitFromURL)
    const paramsURl = getInitialParams(paramsInitFromURL, initialURLParams)
    setParams(paramsURl)
    console.log('paramsURl', paramsURl)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(paramsURl)))
  }, [searchParams])

  const setURLParams = (
    value: Partial<URLParamsType<T, PackParamsInitialType, CardParamsInitialType>>
  ) => {
    // eslint-disable-next-line no-debugger
    debugger
    const paramsInitFromURL = Object.fromEntries(searchParams.entries()) as Partial<
      URLSearchParamsType<URLParamsType<T, PackParamsInitialType, CardParamsInitialType>>
    >
    const paramsURl = getInitialParams({ ...paramsInitFromURL, ...value }, initialURLParams)
    setParams(paramsURl)
    setSearchParams(setCustomSearchParams(translateObjKeyToString(paramsURl)))
  }

  const resetURLParams = () => {
    setSearchParams(setCustomSearchParams(translateObjKeyToString(initialURLParams)))
  }

  return { searchParams, params, setURLParams, resetURLParams }
}

export const getInitialParams = <T>(
  paramsFromURL: Partial<URLSearchParamsType<T>>,
  initialURLParams: T
) => {
  console.log('paramsFromURL', paramsFromURL)
  console.log('initialURLParams', initialURLParams)

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

  console.log('initialURLParamsOff', initialURLParamsOff)

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
