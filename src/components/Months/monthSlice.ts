import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { TInitialState, TPayload } from "./types"

export enum cronOptions {
  everyMonth = 1,
  everyMonthIntervalTill,
  specificMonths,
  everyMonthBetween,
}

const initialState: TInitialState = {
  cronOption: cronOptions.everyMonth,
  values: {
    everyMonthInterval: 1,
    everyMonthIntervalTill: 1,
    specificMonths: ["JAN"],
    everyMonthBetweenStart: 1,
    everyMonthBetweenEnd: 1,
  },
  cronExpression: "*",
}

const monthsSlice = createSlice({
  name: "months",
  initialState,
  reducers: {
    setMonthsValue: (state, action: PayloadAction<TPayload>) => {
      state.values = { ...state.values, ...action.payload }
      return state
    },
    setMonthsCronOption: (state, action: PayloadAction<cronOptions>) => {
      state.cronOption = action.payload

      switch (action.payload) {
        case cronOptions.everyMonth:
          state.cronExpression = "*"
          break

        case cronOptions.everyMonthIntervalTill:
          state.cronExpression = `${state.values.everyMonthIntervalTill}/${state.values.everyMonthInterval}`
          break

        case cronOptions.specificMonths:
          state.cronExpression = state.values.specificMonths.join(",")
          break

        case cronOptions.everyMonthBetween:
          state.cronExpression = `${state.values.everyMonthBetweenStart}-${state.values.everyMonthBetweenEnd}`
          break

        default:
          break
      }

      return state
    },
  },
})

export const { setMonthsValue, setMonthsCronOption } = monthsSlice.actions
export const selectMonths = (state: RootState) => state.months

export default monthsSlice.reducer
