import { WordStats } from "../../../model"

export const compareWordsByOccurrence = (firstItem: WordStats, secondsItem: WordStats) => secondsItem.occurred - firstItem.occurred
