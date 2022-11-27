import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})