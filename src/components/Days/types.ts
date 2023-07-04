import { cronOptions } from "./daysSlice"

export type TPayload =
  | { everyDayOfMonthInterval: number }
  | { everyDayOfMonthIntervalTill: number }
  | { specificDaysOfMonth: number[] }
  | { everyDaysOfMonthBetweenStart: number }
  | { everyDaysOfMonthBetweenEnd: number }
  | { everyDayOfWeekInterval: number }
  | { everyDayOfWeekIntervalTill: number }
  | { specificDaysOfWeek: string[] }
  | { everyDaysOfWeekBetweenStart: number }
  | { everyDaysOfWeekBetweenEnd: number }

export type TInitialState = {
  cronOption: cronOptions
  values: {
    everyDayOfMonthInterval: number
    everyDayOfMonthIntervalTill: number
    specificDaysOfMonth: number[]
    everyDaysOfMonthBetweenStart: number
    everyDaysOfMonthBetweenEnd: number
    everyDayOfWeekInterval: number
    everyDayOfWeekIntervalTill: number
    specificDaysOfWeek: string[]
    everyDaysOfWeekBetweenStart: number
    everyDaysOfWeekBetweenEnd: number
  }
  cronExpression: [string, string]
}
