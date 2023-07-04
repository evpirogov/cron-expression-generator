import { Divider, Input, List, Space } from "antd"
import { ChangeEvent, useState } from "react"

export const CheckExpression = () => {
  const [expression, setExpression] = useState<string>()
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const minutesRegEx =
    /^(\*|(?:[0-9]|(?:[1-5][0-9]))(?:(?:-[0-9]|-(?:[1-5][0-9]))?|(?:,(?:[0-9]|(?:[1-5][0-9])))*))*$/
  const minutesRegExAlt =
    /^(\*|[1-5]?[0-9](-[1-5]?[0-9])?)(\/[1-9][0-9]*)?(,(\*|[1-5]?[0-9](-[1-5]?[0-9])?)(\/[1-9][0-9]*)?)*$/

  const hoursRegEx =
    /^(\*|(?:[0-9]|1[0-9]|2[0-3])(?:(?:-(?:[0-9]|1[0-9]|2[0-3]))?|(?:,(?:[0-9]|1[0-9]|2[0-3]))*))*$/
  const hoursRegExAlt =
    /^(\*|(1?[0-9]|2[0-3])(-(1?[0-9]|2[0-3]))?)(\/[1-9][0-9]*)?(,(\*|(1?[0-9]|2[0-3])(-(1?[0-9]|2[0-3]))?)(\/[1-9][0-9]*)?)*$/

  const daysOfMonthRegEx =
    /^(\*|(?:[1-9]|(?:[12][0-9])|3[01])(?:(?:-(?:[1-9]|(?:[12][0-9])|3[01]))?|(?:,(?:[1-9]|(?:[12][0-9])|3[01]))*))*$/
  const daysOfMonthRegExAlt =
    /^(\?|([1-9]|[1-2][0-9]?|3[0-1])(-([1-9]|[1-2][0-9]?|3[0-1]))?)(\/[1-9][0-9]*)?(,(\*|([1-9]|[1-2][0-9]?|3[0-1])(-([1-9]|[1-2][0-9]?|3[0-1]))?)(\/[1-9][0-9]*)?)*$/

  const monthsRegEx =
    /^(\*|(?:[1-9]|1[012]|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-(?:[1-9]|1[012]|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?|(?:,(?:[1-9]|1[012]|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))*))*$/
  const monthsRegExAlt =
    /^(\*|([1-9]|1[0-2]?)(-([1-9]|1[0-2]?))?)(\/[1-9][0-9]*)?(,(\*|([1-9]|1[0-2]?)(-([1-9]|1[0-2]?))?)(\/[1-9][0-9]*)?)*$/

  const daysOfWeekRegEx =
    /^(\*|(?:[0-6]|SUN|MON|TUE|WED|THU|FRI|SAT)(?:(?:-(?:[0-6]|SUN|MON|TUE|WED|THU|FRI|SAT))?|(?:,(?:[0-6]|SUN|MON|TUE|WED|THU|FRI|SAT))*))*$/
  const daysOfWeekRegExAlt =
    /^(\?|[0-6](-[0-6])?)(\/[1-9][0-9]*)?(,(\*|[0-6](-[0-6])?)(\/[1-9][0-9]*)?)*$/

  const validationHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value)
    const errors: string[] = []

    const expression = e.target.value.split(" ")

    if (expression.length !== 5) {
      errors.push(
        "Текущая версия не поддерживает секунды и года. Количество параметров должно быть равным 5."
      )
      setValidationErrors(errors)
      return
    }

    const [minutes, hours, daysOfMonth, months, daysOfWeek] = expression

    if (daysOfMonth === "?" && daysOfWeek === "?") {
      errors.push(
        "Должен быть определен хотябы один из параметров: день недели или день месяца"
      )
    }

    if (daysOfMonth !== "?" && daysOfWeek !== "?") {
      errors.push(
        "Должен быть определен только один из параметров: день недели или день месяца"
      )
    }

    if (!minutesRegEx.test(minutes) && !minutesRegExAlt.test(minutes)) {
      errors.push("Ошибка в параметре минут")
    }

    if (!hoursRegEx.test(hours) && !hoursRegExAlt.test(hours)) {
      errors.push("Ошибка в параметре часов")
    }

    if (
      !daysOfMonthRegEx.test(daysOfMonth) &&
      !daysOfMonthRegExAlt.test(daysOfMonth)
    ) {
      errors.push("Ошибка в параметре дней месяца")
    }

    if (!monthsRegEx.test(months) && !monthsRegExAlt.test(months)) {
      errors.push("Ошибка в параметре месяца")
    }

    if (
      !daysOfWeekRegEx.test(daysOfWeek) &&
      !daysOfWeekRegExAlt.test(daysOfWeek)
    ) {
      errors.push("Ошибка в параметре дней недели")
    }

    setValidationErrors(errors)
  }

  return (
    <>
      <Divider
        orientation="left"
        style={{ fontSize: 24, marginTop: 60 }}
        orientationMargin="0"
      >
        Проверить выражение
      </Divider>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          addonBefore={"Cron выражение:"}
          placeholder="Введите выражение"
          value={expression}
          onChange={validationHandler}
        />
        {expression &&
          (validationErrors.length === 0 ? (
            <List
              size="small"
              header={
                <span style={{ color: "green" }}>Выражение корректно</span>
              }
              bordered
              dataSource={[null]}
            />
          ) : (
            <List
              size="small"
              header={
                <span style={{ color: "red" }}>Выражение некорректно</span>
              }
              bordered
              dataSource={validationErrors}
              renderItem={(item) => <List.Item>- {item}</List.Item>}
            />
          ))}
      </Space>
    </>
  )
}
//0/5 0-5 ? JAN,APR MON
