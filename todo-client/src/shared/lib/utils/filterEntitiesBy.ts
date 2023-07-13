export function filterEntitiesBy<T>(entities: Array<T>,
                                    mapper: (entity: T) => any,
                                    validator: (entityProp: any) => boolean): Array<T> {
  const filteredEntities = entities?.filter?.(entity => validator(mapper(entity)))

  return filteredEntities
}
