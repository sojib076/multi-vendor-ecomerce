import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CompareState {
  comparedIds: number[]
  limit: number
}

const initialState: CompareState = {
  comparedIds: [],
  limit: 3,
}

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    toggleCompare(state, action: PayloadAction<number>) {
      const id = action.payload
      if (state.comparedIds.includes(id)) {
        state.comparedIds = state.comparedIds.filter(itemId => itemId !== id)
      } else {
        if (state.comparedIds.length < state.limit) {
          state.comparedIds.push(id)
        } else {
          alert(`You can compare up to ${state.limit} items.`)
        }
      }
    },
    clearCompare(state) {
      state.comparedIds = []
    },
  },
})

export const { toggleCompare, clearCompare } = compareSlice.actions
export default compareSlice.reducer
