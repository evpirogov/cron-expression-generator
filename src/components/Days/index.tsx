import { useEffect } from "react"
import { Divider, Radio, Select, Space } from "antd"
import type { RadioChangeEvent } from "antd"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { selectDays, setDaysValue, setDaysCronOption } from "./daysSlice"
import { cronOptions } from "./daysSlice"
import {
  getDaysOfWeek_sunday_to_monday,
  getDaysOfWeek_SUN_to_SAT,
  getDaysOfWeek_1to7,
  getDaysOfMonth_1to31,
} from "./utils"

export const Days = () => {
  const dispatch = useAppDispatch()
  const days = useAppSelector((state) => selectDays(state))

  useEffect(() => {
    console.log(days)
  })

  const onChangeRadio = (e: RadioChangeEvent) => {
    dispatch(setDaysCronOption(e.target.value))
  }

  const handleChange = {
    everyDayOfWeekInterval: (value: number) => {
      dispatch(setDaysValue({ everyDayOfWeekInterval: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfWeekIntervalTill))
    },
    everyDayOfWeekIntervalTill: (value: number) => {
      dispatch(setDaysValue({ everyDayOfWeekIntervalTill: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfWeekIntervalTill))
    },
    specificDaysOfWeek: (value: string[]) => {
      dispatch(setDaysValue({ specificDaysOfWeek: value }))
      dispatch(setDaysCronOption(cronOptions.specificDaysOfWeek))
    },
    everyDaysOfWeekBetweenStart: (value: number) => {
      dispatch(setDaysValue({ everyDaysOfWeekBetweenStart: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfWeekBetween))
    },
    everyDaysOfWeekBetweenEnd: (value: number) => {
      dispatch(setDaysValue({ everyDaysOfWeekBetweenEnd: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfWeekBetween))
    },
    everyDayOfMonthInterval: (value: number) => {
      dispatch(setDaysValue({ everyDayOfMonthInterval: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfMonthIntervalTill))
    },
    everyDayOfMonthIntervalTill: (value: number) => {
      dispatch(setDaysValue({ everyDayOfMonthIntervalTill: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfMonthIntervalTill))
    },
    specificDaysOfMonth: (value: number[]) => {
      dispatch(setDaysValue({ specificDaysOfMonth: value }))
      dispatch(setDaysCronOption(cronOptions.specificDaysOfMonth))
    },
    everyDaysOfMonthBetweenStart: (value: number) => {
      dispatch(setDaysValue({ everyDaysOfMonthBetweenStart: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfMonthBetween))
    },
    everyDaysOfMonthBetweenEnd: (value: number) => {
      dispatch(setDaysValue({ everyDaysOfMonthBetweenEnd: value }))
      dispatch(setDaysCronOption(cronOptions.everyDayOfMonthBetween))
    },
  }

  return (
    <Radio.Group onChange={onChangeRadio} value={days.cronOption}>
      <Space direction="vertical">
        <Radio value={cronOptions.everyDay}>Каждый день</Radio>

        <Divider plain orientation="left" orientationMargin="0">
          Дни недели
        </Divider>

        <Radio value={cronOptions.everyDayOfWeekIntervalTill}>
          <Space style={{ width: "100%" }}>
            <span>Каждый</span>
            <Select
              size="small"
              value={days.values.everyDayOfWeekInterval}
              style={{ width: 60 }}
              onChange={handleChange.everyDayOfWeekInterval}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfWeek_1to7}
            />
            <span> день начиная с</span>
            <Select
              size="small"
              value={days.values.everyDayOfWeekIntervalTill}
              style={{ width: 110 }}
              onChange={handleChange.everyDayOfWeekIntervalTill}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfWeek_sunday_to_monday}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.specificDaysOfWeek}>
          <Space style={{ width: "100%" }}>
            <span>Определенные дни в неделе:</span>
            <Select
              size="small"
              mode="multiple"
              value={days.values.specificDaysOfWeek}
              style={{ width: "auto", minWidth: "300px" }}
              placeholder="Выбирите дни недели"
              onChange={handleChange.specificDaysOfWeek}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfWeek_SUN_to_SAT}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.everyDayOfWeekBetween}>
          <Space style={{ width: "100%" }}>
            <span>Каждый день недели между </span>
            <Select
              size="small"
              value={days.values.everyDaysOfWeekBetweenStart}
              style={{ width: 110 }}
              onChange={handleChange.everyDaysOfWeekBetweenStart}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfWeek_sunday_to_monday}
            />
            <span> и </span>
            <Select
              size="small"
              value={days.values.everyDaysOfWeekBetweenEnd}
              style={{ width: 110 }}
              onChange={handleChange.everyDaysOfWeekBetweenEnd}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfWeek_sunday_to_monday}
            />
          </Space>
        </Radio>

        <Divider plain orientation="left" orientationMargin="0">
          Дни месяца
        </Divider>

        <Radio value={cronOptions.everyDayOfMonthIntervalTill}>
          <Space style={{ width: "100%" }}>
            <span>Каждый</span>
            <Select
              size="small"
              value={days.values.everyDayOfMonthInterval}
              style={{ width: 60 }}
              onChange={handleChange.everyDayOfMonthInterval}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfMonth_1to31}
            />
            <span> день начиная с</span>
            <Select
              size="small"
              value={days.values.everyDayOfMonthIntervalTill}
              style={{ width: 60 }}
              onChange={handleChange.everyDayOfMonthIntervalTill}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfMonth_1to31}
            />
            <span> числа.</span>
          </Space>
        </Radio>
        <Radio value={cronOptions.specificDaysOfMonth}>
          <Space style={{ width: "100%" }}>
            <span>Определенные числа в месяце:</span>
            <Select
              size="small"
              mode="multiple"
              value={days.values.specificDaysOfMonth}
              style={{ width: "auto", minWidth: "300px" }}
              placeholder="Выбирите числа месяца"
              onChange={handleChange.specificDaysOfMonth}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfMonth_1to31}
            />
          </Space>
        </Radio>
        <Radio value={cronOptions.everyDayOfMonthBetween}>
          <Space style={{ width: "100%" }}>
            <span>Каждый день месяца между </span>
            <Select
              size="small"
              value={days.values.everyDaysOfMonthBetweenStart}
              style={{ width: 60 }}
              onChange={handleChange.everyDaysOfMonthBetweenStart}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfMonth_1to31}
            />
            <span> и </span>
            <Select
              size="small"
              value={days.values.everyDaysOfMonthBetweenEnd}
              style={{ width: 60 }}
              onChange={handleChange.everyDaysOfMonthBetweenEnd}
              onClick={(e) => e.preventDefault()}
              options={getDaysOfMonth_1to31}
            />
          </Space>
        </Radio>
      </Space>
    </Radio.Group>
  )
}
