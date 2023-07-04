import { Divider, Input, Space, Table } from "antd"
import { useAppSelector } from "../../hooks"
import { selectDays } from "../Days/daysSlice"
import { selectMinutes } from "../Minutes/minutesSlice"
import { selectHours } from "../Hours/hoursSlice"
import { selectMonths } from "../Months/monthSlice"

export const ResultSection = () => {
  const [daysOfMonth, daysOfWeek] = useAppSelector(
    (state) => selectDays(state).cronExpression
  )
  const minutes = useAppSelector((state) => selectMinutes(state).cronExpression)
  const hours = useAppSelector((state) => selectHours(state).cronExpression)
  const months = useAppSelector((state) => selectMonths(state).cronExpression)

  const data = [
    {
      key: 1,
      minutes,
      hours,
      daysOfMonth,
      months,
      daysOfWeek,
    },
  ]

  const columns = [
    {
      title: "Минуты",
      dataIndex: "minutes",
      key: "minutes",
    },
    {
      title: "Часы",
      dataIndex: "hours",
      key: "hours",
    },
    {
      title: "Дни месяца",
      dataIndex: "daysOfMonth",
      key: "daysOfMonth",
    },
    {
      title: "Месяцы",
      dataIndex: "months",
      key: "months",
    },
    {
      title: "Дни недели",
      dataIndex: "daysOfWeek",
      key: "daysOfWeek",
    },
  ]

  return (
    <div>
      <Divider orientation="left" orientationMargin="0">
        Параметры получаемого выражения
      </Divider>
      <Table
        tableLayout="fixed"
        pagination={false}
        dataSource={data}
        columns={columns}
      />
      <Space style={{ marginTop: 8 }}>
        <Input
          addonBefore={"Сформированное выражение:"}
          value={`${minutes} ${hours} ${daysOfMonth} ${months} ${daysOfWeek}`}
        ></Input>
      </Space>
    </div>
  )
}
