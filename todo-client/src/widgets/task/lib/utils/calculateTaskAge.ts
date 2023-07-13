import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns"

export const calculateTaskAge = (creationDate: Date | string): string => {
  const now = Date.now()
  const createdDate = new Date(creationDate).getTime()

  const secondsPassed = differenceInSeconds(now, createdDate)
  if (secondsPassed < 60) {
    return `${secondsPassed} seconds`
  }

  const minutesPassed = differenceInMinutes(now, createdDate)
  if (minutesPassed < 60) {
    return `${minutesPassed} minutes`
  }

  const hoursPassed = differenceInHours(now, createdDate)
  if (hoursPassed < 24) {
    return `${hoursPassed} hours`
  }

  const daysPassed = differenceInDays(now, createdDate)
  return `${daysPassed} days`
}

