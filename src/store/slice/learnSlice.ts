import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type LearnType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
}

export type ResponseLearnType = {
    updatedGrade: LearnType,
    token: string,
    tokenDeathTime:number
}
export type LearnRequestType = {
    grade: number
    card_id: string
}
export const initialState: LearnType = {
    _id: '',
    cardsPack_id: '',
    card_id: '',
    user_id: '',
    grade: 0,
    shots: 0
}

export const learnSlice = createSlice({
    name: 'learnSlice',
    initialState: initialState,
    reducers: {
        setLearnData: (state, action: PayloadAction<LearnType>)=>action.payload
    }
})

export const { setLearnData } = learnSlice.actions