import { createSlice } from '@reduxjs/toolkit'

export const initialState: InitialStateType = {
  isMounting: false,
}

export const resetSlice = createSlice({
  name: 'resetSlice',
  initialState,
  reducers: {
    unmountingComponent: (state) => {
      state.isMounting = true
    },
    mountingComponent: (state) => {
      state.isMounting = false
    },
  },
})

export const { unmountingComponent, mountingComponent } = resetSlice.actions

type InitialStateType = {
  isMounting: boolean
}
