import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const RESET_COUNTER = { type: 'counter/reset' }

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    multiply: (state, action: PayloadAction<number>) => {
      state.value *= action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(RESET_COUNTER.type, (state) => {
      state.value = 0
    })
  }
})

export const { increment, decrement, multiply } = counterSlice.actions
export default counterSlice.reducer
