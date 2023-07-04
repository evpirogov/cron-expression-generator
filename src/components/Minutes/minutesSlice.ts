import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { TInitialState, TPayload } from "./types"

export enum cronOptions {
  everyMinute = 1,
  everyMinuteIntervalTill,
  specificMinutes,
  everyMinuteBetween,
}

const initialState: TInitialState = {
  cronOption: cronOptions.everyMinute,
  values: {
    everyMinuteInterval: 5,
    everyMinuteIntervalTill: 0,
    specificMinutes: [1],
    everyMinuteBetweenStart: 0,
    everyMinuteBetweenEnd: 0,
  },
  cronExpression: "*",
}

const minutesSlice = createSlice({
  name: "minutes",
  initialState,
  reducers: {
    setMinutesValue: (state, action: PayloadAction<TPayload>) => {
      state.values = { ...state.values, ...action.payload }
      return state
    },
    setMinutesCronOption: (state, action: PayloadAction<cronOptions>) => {
      state.cronOption = action.payload

      switch (action.payload) {
        case cronOptions.everyMinute:
          state.cronExpression = "*"
          break

        case cronOptions.everyMinuteIntervalTill:
          state.cronExpression = `${state.values.everyMinuteIntervalTill}/${state.values.everyMinuteInterval}`
          break

        case cronOptions.specificMinutes:
          state.cronExpression = state.values.specificMinutes.join(",")
          break

        case cronOptions.everyMinuteBetween:
          state.cronExpression = `${state.values.everyMinuteBetweenStart}-${state.values.everyMinuteBetweenEnd}`
          break

        default:
          break
      }

      return state
    },
  },
})

export const { setMinutesValue, setMinutesCronOption } = minutesSlice.actions
export const selectMinutes = (state: RootState) => state.minutes

export default minutesSlice.reducer
