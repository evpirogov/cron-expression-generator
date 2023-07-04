import { cronOptions } from "./hoursSlice"

export type TPayload =
  | { everyHourInterval: number }
  | { everyHourIntervalTill: number }
  | { specificHours: number[] }
  | { everyHourBetweenStart: number }
  | { everyHourBetweenEnd: number }

export type TInitialState = {
  cronOption: cronOptions
  values: {
    everyHourInterval: number
    everyHourIntervalTill: number
    specificHours: number[]
    everyHourBetweenStart: number
    everyHourBetweenEnd: number
  }
  cronExpression: string
}
