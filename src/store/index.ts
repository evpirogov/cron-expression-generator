import { configureStore } from "@reduxjs/toolkit"
import minutes from "../components/Minutes/minutesSlice"
import hours from "../components/Hours/hoursSlice"
import months from "../components/Months/monthSlice"
import days from "../components/Days/daysSlice"

export const store = configureStore({
  reducer: {
    minutes,
    hours,
    months,
    days,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
