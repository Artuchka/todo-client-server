export function sortEntitiesBy<T>(entities: Array<T>, ...sortByFunctionsInDescendingPriority: Array<(firstEntity: T, secondEntity: T) => number>): Array<T> {
  if (!sortByFunctionsInDescendingPriority || !entities) {
    return entities
  }
  const sortedEntities = sortByFunctionsInDescendingPriority?.reverse?.()?.reduce((aggSortedEntities, compareFunction) => {
    return aggSortedEntities?.sort?.(compareFunction)
  }, entities)

  return sortedEntities
}
