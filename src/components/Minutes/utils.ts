export const getMinutes_0to59 = Array(60)
  .fill(null)
  .map((_, i) => ({ value: i, label: i }))

export const getMinutes_1to60 = Array(60)
  .fill(null)
  .map((_, i) => ({ value: i + 1, label: i + 1 }))
