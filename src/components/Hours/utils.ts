export const getMinutes_0to23 = Array(24)
  .fill(null)
  .map((_, i) => ({ value: i, label: i }))

export const getMinutes_1to24 = Array(24)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: i + 1 }))
