import { useEffect } from "react"
import { Radio, Select, Space } from "antd"
import type { RadioChangeEvent } from "antd"
import { useAppDispatch, useAppSelector } from "../../hooks"
import {
  cronOptions,
  selectHours,
  setHoursCronOption,
  setHoursValue,
} from "./hoursSlice"
import { getMinutes_0to23, getMinutes_1to24 } from "./utils"

export const Hours = () => {
  const dispatch = useAppDispatch()
  const Hours = useAppSelector((state) => selectHours(state))

  useEffect(() => {
    console.log(Hours)
  })

  const onChangeRadio = (e: RadioChangeEvent) => {
    dispatch(setHoursCronOption(e.target.value))
  }

  const handleChange = {
    everyHourInterval: (value: number) => {
      dispatch(setHoursValue({ everyHourInterval: value }))
      dispatch(setHoursCronOption(cronOptions.everyHourIntervalTill))
    },
    everyHourIntervalTill: (value: number) => {
      dispatch(setHoursValue({ everyHourIntervalTill: value }))
      dispatch(setHoursCronOption(cronOptions.everyHourIntervalTill))
    },
    specificHours: (value: number[]) => {
      dispatch(setHoursValue({ specificHours: value }))
      dispatch(setHoursCronOption(cronOptions.specificHours))
    },
    everyHourBetweenStart: (value: number) => {
      dispatch(setHoursValue({ everyHourBetweenStart: value }))
      dispatch(setHoursCronOption(cronOptions.everyHourBetween))
    },
    everyHourBetweenEnd: (value: number) => {
      dispatch(setHoursValue({ everyHourBetweenEnd: value }))
      dispatch(setHoursCronOption(cronOptions.everyHourBetween))
    },
  }

  return (
    <Radio.Group onChange={onChangeRadio} value={Hours.cronOption}>
      <Space direction="vertical">
        <Radio value={cronOptions.everyHour}>Каждый час</Radio>
        <Radio value={cronOptions.everyHourIntervalTill}>
          <Space style={{ width: "100%" }}>
            <span>Каждые</span>
            <Select
              size="small"
              value={Hours.values.everyHourInterval}
              style={{ width: 60 }}
              onChange={handleChange.everyHourInterval}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to24}
            />
            <span> часов начиная с</span>
            <Select
              size="small"
              value={Hours.values.everyHourIntervalTill}
              style={{ width: 60 }}
              onChange={handleChange.everyHourIntervalTill}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_0to23}
            />
            <span> часа.</span>
          </Space>
        </Radio>
        <Radio value={cronOptions.specificHours}>
          <Space style={{ width: "100%" }}>
            <span>Определенные часы в сутках:</span>
            <Select
              size="small"
              mode="multiple"
              value={Hours.values.specificHours}
              style={{ width: "auto", minWidth: "300px" }}
              placeholder="Выбирите часы"
              onChange={handleChange.specificHours}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to24}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.everyHourBetween}>
          <Space style={{ width: "100%" }}>
            <span>Каждый час между </span>
            <Select
              size="small"
              value={Hours.values.everyHourBetweenStart}
              style={{ width: 60 }}
              onChange={handleChange.everyHourBetweenStart}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to24}
            />
            <span> и </span>
            <Select
              size="small"
              value={Hours.values.everyHourBetweenEnd}
              style={{ width: 60 }}
              onChange={handleChange.everyHourBetweenEnd}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to24}
            />
            <span> часами. </span>
          </Space>
        </Radio>
      </Space>
    </Radio.Group>
  )
}
