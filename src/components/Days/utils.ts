function getDayName(dayNumber: number, type: "long" | "short" = "long") {
  const date = new Date(Date.UTC(1970, 0, 4 + dayNumber))

  return date.toLocaleString("en-EN", { weekday: type }) //toLocaleDateString
}

export const getDaysOfWeek_sunday_to_monday = Array(7)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: getDayName(i) }))

export const getDaysOfWeek_SUN_to_SAT = Array(7)
  .fill(null)
  .map((_, i) => ({
    value: getDayName(i, "short").toUpperCase(),
    label: getDayName(i, "short").toUpperCase(),
  }))

export const getDaysOfWeek_1to7 = Array(7)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: i + 1 }))

export const getDaysOfMonth_1to31 = Array(31)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: i + 1 }))
