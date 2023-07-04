import { useEffect } from "react"
import { Radio, Select, Space } from "antd"
import type { RadioChangeEvent } from "antd"
import { useAppDispatch, useAppSelector } from "../../hooks"
import {
  selectMinutes,
  setMinutesValue,
  setMinutesCronOption,
} from "./minutesSlice"
import { cronOptions } from "./minutesSlice"
import { getMinutes_0to59, getMinutes_1to60 } from "./utils"

export const Minutes = () => {
  const dispatch = useAppDispatch()
  const minutes = useAppSelector((state) => selectMinutes(state))

  useEffect(() => {
    console.log(minutes)
  })

  const onChangeRadio = (e: RadioChangeEvent) => {
    dispatch(setMinutesCronOption(e.target.value))
  }

  const handleChange = {
    everyMinuteInterval: (value: number) => {
      dispatch(setMinutesValue({ everyMinuteInterval: value }))
      dispatch(setMinutesCronOption(cronOptions.everyMinuteIntervalTill))
    },
    everyMinuteIntervalTill: (value: number) => {
      dispatch(setMinutesValue({ everyMinuteIntervalTill: value }))
      dispatch(setMinutesCronOption(cronOptions.everyMinuteIntervalTill))
    },
    specificMinutes: (value: number[]) => {
      dispatch(setMinutesValue({ specificMinutes: value }))
      dispatch(setMinutesCronOption(cronOptions.specificMinutes))
    },
    everyMinuteBetweenStart: (value: number) => {
      dispatch(setMinutesValue({ everyMinuteBetweenStart: value }))
      dispatch(setMinutesCronOption(cronOptions.everyMinuteBetween))
    },
    everyMinuteBetweenEnd: (value: number) => {
      dispatch(setMinutesValue({ everyMinuteBetweenEnd: value }))
      dispatch(setMinutesCronOption(cronOptions.everyMinuteBetween))
    },
  }

  return (
    <Radio.Group onChange={onChangeRadio} value={minutes.cronOption}>
      <Space direction="vertical">
        <Radio value={cronOptions.everyMinute}>Каждую минуту</Radio>
        <Radio value={cronOptions.everyMinuteIntervalTill}>
          <Space style={{ width: "100%" }}>
            <span>Каждые</span>
            <Select
              size="small"
              value={minutes.values.everyMinuteInterval}
              style={{ width: 60 }}
              onChange={handleChange.everyMinuteInterval}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to60}
            />
            <span> минут начиная с</span>
            <Select
              size="small"
              value={minutes.values.everyMinuteIntervalTill}
              style={{ width: 60 }}
              onChange={handleChange.everyMinuteIntervalTill}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_0to59}
            />
            <span> минуты.</span>
          </Space>
        </Radio>
        <Radio value={cronOptions.specificMinutes}>
          <Space style={{ width: "100%" }}>
            <span>Определенные минуты в часу:</span>
            <Select
              size="small"
              mode="multiple"
              value={minutes.values.specificMinutes}
              style={{ width: "auto", minWidth: "300px" }}
              placeholder="Выбирите минуты"
              onChange={handleChange.specificMinutes}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to60}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.everyMinuteBetween}>
          <Space style={{ width: "100%" }}>
            <span>Каждую минуту между </span>
            <Select
              size="small"
              value={minutes.values.everyMinuteBetweenStart}
              style={{ width: 60 }}
              onChange={handleChange.everyMinuteBetweenStart}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to60}
            />
            <span> и </span>
            <Select
              size="small"
              value={minutes.values.everyMinuteBetweenEnd}
              style={{ width: 60 }}
              onChange={handleChange.everyMinuteBetweenEnd}
              onClick={(e) => e.preventDefault()}
              options={getMinutes_1to60}
            />
            <span> минутами. </span>
          </Space>
        </Radio>
      </Space>
    </Radio.Group>
  )
}
