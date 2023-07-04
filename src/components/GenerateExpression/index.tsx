import { Divider, Space, Tabs, TabsProps } from "antd"
import { ResultSection } from "../ResultSection"
import { Minutes } from "../Minutes"
import { Hours } from "../Hours"
import { Days } from "../Days"
import { Months } from "../Months"

export const GenerateExpression = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Минуты`,
      children: <Minutes />,
    },
    {
      key: "2",
      label: `Часы`,
      children: <Hours />,
    },
    {
      key: "3",
      label: `Дни`,
      children: <Days />,
    },
    {
      key: "4",
      label: `Месяцы`,
      children: <Months />,
    },
  ]
  return (
    <>
      <Space style={{ minHeight: 500, width: "100%" }} direction="vertical">
        <Divider
          orientation="left"
          style={{ fontSize: 24 }}
          orientationMargin="0"
        >
          Сформировать выражение
        </Divider>
        <Tabs defaultActiveKey="1" items={items} />
      </Space>
      <ResultSection />
    </>
  )
}
