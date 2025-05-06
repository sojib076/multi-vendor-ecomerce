import { configureStore } from '@reduxjs/toolkit'
import compareReducer from './slices/compareSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    compare: compareReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
