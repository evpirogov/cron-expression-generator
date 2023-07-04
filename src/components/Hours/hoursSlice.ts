import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { TInitialState, TPayload } from "./types"

export enum cronOptions {
  everyHour = 1,
  everyHourIntervalTill,
  specificHours,
  everyHourBetween,
}

const initialState: TInitialState = {
  cronOption: cronOptions.everyHour,
  values: {
    everyHourInterval: 5,
    everyHourIntervalTill: 0,
    specificHours: [1],
    everyHourBetweenStart: 0,
    everyHourBetweenEnd: 0,
  },
  cronExpression: "*",
}

const hoursSlice = createSlice({
  name: "hours",
  initialState,
  reducers: {
    setHoursValue: (state, action: PayloadAction<TPayload>) => {
      state.values = { ...state.values, ...action.payload }
      return state
    },
    setHoursCronOption: (state, action: PayloadAction<cronOptions>) => {
      state.cronOption = action.payload

      switch (action.payload) {
        case cronOptions.everyHour:
          state.cronExpression = "*"
          break

        case cronOptions.everyHourIntervalTill:
          state.cronExpression = `${state.values.everyHourIntervalTill}/${state.values.everyHourInterval}`
          break

        case cronOptions.specificHours:
          state.cronExpression = state.values.specificHours.join(",")
          break

        case cronOptions.everyHourBetween:
          state.cronExpression = `${state.values.everyHourBetweenStart}-${state.values.everyHourBetweenEnd}`
          break

        default:
          break
      }

      return state
    },
  },
})

export const { setHoursValue, setHoursCronOption } = hoursSlice.actions
export const selectHours = (state: RootState) => state.hours

export default hoursSlice.reducer
