import { createSlice } from '@reduxjs/toolkit'

export const currentYearSlice = createSlice({
  name: 'currentYear',
  initialState: {
    value: 2024
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value < 2024) {
        if (state.value == 2019) {
          state.value += 3;
        } else {
          state.value += 1;
        }
      }
    },
    decrement: state => {
      if (state.value > 2013) {
        if (state.value == 2022) {
          state.value -= 3;
        } else {
          state.value -= 1;
        }
      }
    }
  }
})

export const { increment, decrement } = currentYearSlice.actions

export default currentYearSlice.reducer