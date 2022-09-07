import { useState } from 'react'

// export const usePacks = (initialState: usePacksType[] = []): usePacksType[] => {
//   // const [packs, setPacks] = useState<usePacksType>([])
//   // return {
//   //   packs,
//   //   setPacks,
//   // }
// }
type InitialStateType = {
  packs: usePacksType[]
  setPacks: (packs: usePacksType[]) => void
}
type usePacksType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}
