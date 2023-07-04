import { cronOptions } from "./minutesSlice"

export type TPayload =
  | { everyMinuteInterval: number }
  | { everyMinuteIntervalTill: number }
  | { specificMinutes: number[] }
  | { everyMinuteBetweenStart: number }
  | { everyMinuteBetweenEnd: number }

export type TInitialState = {
  cronOption: cronOptions
  values: {
    everyMinuteInterval: number
    everyMinuteIntervalTill: number
    specificMinutes: number[]
    everyMinuteBetweenStart: number
    everyMinuteBetweenEnd: number
  }
  cronExpression: string
}
