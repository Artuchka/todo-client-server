import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns"

export const calculateTaskLeft = (deadlineDate: Date | string) => {
  const now = Date.now()
  const deadline = new Date(deadlineDate).getTime()

  const daysLeft = differenceInDays(deadline, now)
  if (daysLeft >= 1) {
    return `${daysLeft} days`
  }

  const hoursLeft = differenceInHours(deadline, now)
  if (hoursLeft >= 1) {
    return `${hoursLeft} hours`
  }

  const minutesLeft = differenceInMinutes(deadline, now)
  if (minutesLeft >= 1) {
    return `${minutesLeft} minutes`
  }


  const secondsLeft = differenceInSeconds(deadline, now)
  if (secondsLeft >= 1) {
    return `${minutesLeft} seconds`
  }
}
