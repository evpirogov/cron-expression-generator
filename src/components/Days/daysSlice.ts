import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import { TInitialState, TPayload } from "./types"

export enum cronOptions {
  everyDay = 1,
  everyDayOfMonthIntervalTill,
  specificDaysOfMonth,
  everyDayOfMonthBetween,
  everyDayOfWeekIntervalTill,
  specificDaysOfWeek,
  everyDayOfWeekBetween,
}

const initialState: TInitialState = {
  cronOption: cronOptions.everyDay,
  values: {
    everyDayOfMonthInterval: 1,
    everyDayOfMonthIntervalTill: 1,
    specificDaysOfMonth: [1],
    everyDaysOfMonthBetweenStart: 1,
    everyDaysOfMonthBetweenEnd: 1,
    everyDayOfWeekInterval: 1,
    everyDayOfWeekIntervalTill: 1,
    specificDaysOfWeek: ["MON"],
    everyDaysOfWeekBetweenStart: 1,
    everyDaysOfWeekBetweenEnd: 1,
  },
  cronExpression: ["*", "?"],
}

const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    setDaysValue: (state, action: PayloadAction<TPayload>) => {
      state.values = { ...state.values, ...action.payload }
      return state
    },
    setDaysCronOption: (state, action: PayloadAction<cronOptions>) => {
      state.cronOption = action.payload

      switch (action.payload) {
        case cronOptions.everyDay:
          state.cronExpression = ["*", "?"]
          break

        case cronOptions.everyDayOfMonthIntervalTill:
          state.cronExpression = [
            `${state.values.everyDayOfMonthIntervalTill}/${state.values.everyDayOfMonthInterval}`,
            "?",
          ]
          break

        case cronOptions.specificDaysOfMonth:
          state.cronExpression = [
            state.values.specificDaysOfMonth.join(","),
            "?",
          ]
          break

        case cronOptions.everyDayOfMonthBetween:
          state.cronExpression = [
            `${state.values.everyDaysOfMonthBetweenStart}-${state.values.everyDaysOfMonthBetweenEnd}`,
            "?",
          ]
          break

        case cronOptions.everyDayOfWeekIntervalTill:
          state.cronExpression = [
            "?",
            `${state.values.everyDayOfWeekIntervalTill}/${state.values.everyDayOfWeekInterval}`,
          ]
          break

        case cronOptions.specificDaysOfWeek:
          state.cronExpression = [
            "?",
            state.values.specificDaysOfWeek.join(","),
          ]
          break

        case cronOptions.everyDayOfWeekBetween:
          state.cronExpression = [
            "?",
            `${state.values.everyDaysOfWeekBetweenStart}-${state.values.everyDaysOfWeekBetweenEnd}`,
          ]
          break

        default:
          break
      }

      return state
    },
  },
})

export const { setDaysValue, setDaysCronOption } = daysSlice.actions
export const selectDays = (state: RootState) => state.days

export default daysSlice.reducer
