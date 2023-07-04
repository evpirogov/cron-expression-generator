function getMonthName(monthNumber: number, type: "long" | "short" = "long") {
  const date = new Date()
  date.setMonth(monthNumber)

  return date.toLocaleString("en-EN", { month: type })
}

export const getMonths_january_to_december = Array(12)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: getMonthName(i) }))

export const getMonths_JAN_to_DEC = Array(12)
  .fill(null)
  .map((_, i) => ({
    value: getMonthName(i, "short").toUpperCase(),
    label: getMonthName(i, "short").toUpperCase(),
  }))

export const getMonths_1to12 = Array(12)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: i + 1 }))
