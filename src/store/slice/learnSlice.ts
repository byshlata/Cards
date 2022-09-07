import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LearnTypeResponseType = {
  _id: string
  cardsPack_id: string
  card_id: string
  user_id: string
  grade: number
  shots: number
  more_id: string
  created: string
  updated: string
  __v: number
}

export type ResponseLearnType = {
  updatedGrade: LearnTypeResponseType
  token: string
  tokenDeathTime: number
}

export type LearnRequestType = {
  grade: number
  card_id: string
}

interface IState {
  updatedGrate: LearnTypeResponseType
  grade: number
}

export const initialState: IState = {
  updatedGrate: {} as LearnTypeResponseType,
  grade: 0,
}

export const learnSlice = createSlice({
  name: 'learnSlice',
  initialState,
  reducers: {
    setLearnData: (state: IState, { payload }: PayloadAction<LearnTypeResponseType>) => {
      state.updatedGrate = payload
    },
    setCartGrade: (state, { payload }: PayloadAction<number>) => {
      state.grade = payload
    },
  },
})

export const { setLearnData, setCartGrade } = learnSlice.actions
