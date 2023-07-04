import { cronOptions } from "./monthSlice"

export type TPayload =
  | { everyMonthInterval: number }
  | { everyMonthIntervalTill: number }
  | { specificMonths: string[] }
  | { everyMonthBetweenStart: number }
  | { everyMonthBetweenEnd: number }

export type TInitialState = {
  cronOption: cronOptions
  values: {
    everyMonthInterval: number
    everyMonthIntervalTill: number
    specificMonths: string[]
    everyMonthBetweenStart: number
    everyMonthBetweenEnd: number
  }
  cronExpression: string
}
