import { configureStore } from '@reduxjs/toolkit'
import currentYearReducer from './features/currentYear/currentYearSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      currentYear: currentYearReducer,
    }
  })
}