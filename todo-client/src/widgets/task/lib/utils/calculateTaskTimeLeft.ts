import { compareAsc } from "date-fns"
import { calculateTaskLate } from "./calculateTaskLate"
import { calculateTaskLeft } from "./calculateTaskLeft"

export const calculateTaskTimeLeft = (deadlineDate: Date | string): string => {
  const now = Date.now()
  const deadline = new Date(deadlineDate).getTime()
  const isLate = compareAsc(now, deadline)

  if (isLate === -1) {
    return calculateTaskLeft(deadlineDate)
  }

  return calculateTaskLate(deadlineDate)
}

