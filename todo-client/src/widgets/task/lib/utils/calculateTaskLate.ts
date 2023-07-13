import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns"

export const calculateTaskLate = (deadlineDate: Date | string) => {
  const now = Date.now()
  const deadline = new Date(deadlineDate).getTime()
  
  const daysLeft = differenceInDays(now, deadline)
  if (daysLeft >= 1) {
    return `late for ${daysLeft} days`
  }

  const hoursLeft = differenceInHours(now, deadline)
  if (hoursLeft >= 1) {
    return `late for ${hoursLeft} hours`
  }

  const minutesLeft = differenceInMinutes(now, deadline)
  if (minutesLeft >= 1) {
    return `late for ${minutesLeft} minutes`
  }


  const secondsLeft = differenceInSeconds(now, deadline)
  if (secondsLeft >= 1) {
    return `late for ${minutesLeft} seconds`
  }
}
