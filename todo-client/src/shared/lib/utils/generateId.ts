function createIndexGenerator() {
  let count = 0

  function countUp() {
    count++
    if (count === Number.MAX_SAFE_INTEGER) {
      count = 0
    }
    return count
  }

  return countUp
}

export const generateId = createIndexGenerator()


