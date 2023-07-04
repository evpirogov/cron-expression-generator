import { useEffect } from "react"
import { Radio, Select, Space } from "antd"
import type { RadioChangeEvent } from "antd"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { selectMonths, setMonthsValue, setMonthsCronOption } from "./monthSlice"
import { cronOptions } from "./monthSlice"
import {
  getMonths_january_to_december,
  getMonths_JAN_to_DEC,
  getMonths_1to12,
} from "./utils"

export const Months = () => {
  const dispatch = useAppDispatch()
  const months = useAppSelector((state) => selectMonths(state))

  useEffect(() => {
    console.log(months)
  })

  const onChangeRadio = (e: RadioChangeEvent) => {
    dispatch(setMonthsCronOption(e.target.value))
  }

  const handleChange = {
    everyMonthInterval: (value: number) => {
      dispatch(setMonthsValue({ everyMonthInterval: value }))
      dispatch(setMonthsCronOption(cronOptions.everyMonthIntervalTill))
    },
    everyMonthIntervalTill: (value: number) => {
      dispatch(setMonthsValue({ everyMonthIntervalTill: value }))
      dispatch(setMonthsCronOption(cronOptions.everyMonthIntervalTill))
    },
    specificMonths: (value: string[]) => {
      dispatch(setMonthsValue({ specificMonths: value }))
      dispatch(setMonthsCronOption(cronOptions.specificMonths))
    },
    everyMonthBetweenStart: (value: number) => {
      dispatch(setMonthsValue({ everyMonthBetweenStart: value }))
      dispatch(setMonthsCronOption(cronOptions.everyMonthBetween))
    },
    everyMonthBetweenEnd: (value: number) => {
      dispatch(setMonthsValue({ everyMonthBetweenEnd: value }))
      dispatch(setMonthsCronOption(cronOptions.everyMonthBetween))
    },
  }

  return (
    <Radio.Group onChange={onChangeRadio} value={months.cronOption}>
      <Space direction="vertical">
        <Radio value={cronOptions.everyMonth}>Каждый месяц</Radio>
        <Radio value={cronOptions.everyMonthIntervalTill}>
          <Space style={{ width: "100%" }}>
            <span>Каждый</span>
            <Select
              size="small"
              value={months.values.everyMonthInterval}
              style={{ width: 60 }}
              onChange={handleChange.everyMonthInterval}
              onClick={(e) => e.preventDefault()}
              options={getMonths_1to12}
            />
            <span> месяц начиная с</span>
            <Select
              size="small"
              value={months.values.everyMonthIntervalTill}
              style={{ width: 110 }}
              onChange={handleChange.everyMonthIntervalTill}
              onClick={(e) => e.preventDefault()}
              options={getMonths_january_to_december}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.specificMonths}>
          <Space style={{ width: "100%" }}>
            <span>Определенные месяцы в году:</span>
            <Select
              size="small"
              mode="multiple"
              value={months.values.specificMonths}
              style={{ width: "auto", minWidth: "300px" }}
              placeholder="Выбирите месяцы"
              onChange={handleChange.specificMonths}
              onClick={(e) => e.preventDefault()}
              options={getMonths_JAN_to_DEC}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.everyMonthBetween}>
          <Space style={{ width: "100%" }}>
            <span>Каждый месяц между </span>
            <Select
              size="small"
              value={months.values.everyMonthBetweenStart}
              style={{ width: 110 }}
              onChange={handleChange.everyMonthBetweenStart}
              onClick={(e) => e.preventDefault()}
              options={getMonths_january_to_december}
            />
            <span> и </span>
            <Select
              size="small"
              value={months.values.everyMonthBetweenEnd}
              style={{ width: 110 }}
              onChange={handleChange.everyMonthBetweenEnd}
              onClick={(e) => e.preventDefault()}
              options={getMonths_january_to_december}
            />
          </Space>
        </Radio>
      </Space>
    </Radio.Group>
  )
}
